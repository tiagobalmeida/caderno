export default class Drive {

    public static initialized: Promise<any> | null = null;
    protected rootFolderId: string;
    protected _loadedLib: Promise<any> | null = null;
    protected static discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    protected static scopes = "https://www.googleapis.com/auth/drive.file";
    protected static clientId: string;
    protected static apiKey: string;
    protected static _instance: Drive | null = null;

    public static configure(clientId: string, apiKey: string) {
        Drive.clientId = clientId;
        Drive.apiKey = apiKey;
        jQuery.sap.log.info("Drive support configured.");
    }


    constructor() {
        this._loadedLib = null;
    }


    public static getInstance(): Drive {
        if (Drive._instance === null || Drive._instance === undefined) {
            Drive._instance = new Drive();
        }
        return Drive._instance;
    }

    public setRootFolderId(rootFolderId:string) {
        this.rootFolderId = rootFolderId;
    }


    public loadLibraries() {
        if (this._loadedLib !== null) {
            return this._loadedLib;
        }
        var loadedPromise = new Promise(function(resolve, reject) {
            var newScript = document.createElement('script');
            newScript.src = "https://apis.google.com/js/api.js";
            newScript.defer = true;
            newScript.onload = function() {
                console.log("Drive: api.js onload (loadLibraries)");
                resolve(gapi);
            }
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(newScript, firstScriptTag);
        });
        this._loadedLib = loadedPromise;
        return loadedPromise;
    }

    public initialize() {
        if(Drive.initialized === null){
            var p = new Promise(function(resolve, reject){
                gapi.load('client:auth2', function(){
                    console.log("Drive: gapi.load callback called");
                    gapi.client.init({
                        apiKey: Drive.apiKey,
                        clientId: Drive.clientId,
                        discoveryDocs: Drive.discoveryDocs,
                        scope: Drive.scopes,
                    }).then(function(){
                        console.log("Drive: gapi.client.init resolved");
                        gapi.auth2.getAuthInstance().isSignedIn.listen(
                            function(){
                                console.log("Drive: isSignedIn triggered");
                            });
                        resolve();
                    }).catch(function(error:any){
                        debugger;
                    });
                });
            });
            Drive.initialized = p;
        }
        return Drive.initialized;
    }

    public signIn() {
        gapi.auth2.getAuthInstance().signIn();
    }


    public createRootFolder() {
        var parentId = '';
        var fileMetadata = {
            'name': 'Caderno Notes',
            'mimeType': 'application/vnd.google-apps.folder'
        };
        return gapi.client.drive.files.create({
            resource: fileMetadata,
        });
    }


    public createFile(name:string) : Promise<any> {
        var parentFolderId = this.rootFolderId;
        var fileMetadata = {
            name: name,
            parents: [parentFolderId]
        };
        var media = {
        };
        var c = gapi.client.drive.files.create({
            resource: fileMetadata,
            //media: media,
            fields: 'id'
        });
        return c;

    }

    public listFiles() {
        var rootId = this.rootFolderId;
        return gapi.client.drive.files.list({
            q: `${rootId} in parents`,
            pageSize: 1000
        });
    }

    public updateFileContent(content:string, fileId:string) {
        var p = new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.onreadystatechange = function() {
                if (xhr.readyState != XMLHttpRequest.DONE) {
                    return;
                }
                resolve(xhr.response);
            };
            xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
            xhr.setRequestHeader('Authorization', 'Bearer ' + gapi.auth.getToken().access_token);
            xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8');
            xhr.send(content);
        });
        return p;
    }

}
