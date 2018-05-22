import Note from "jz/caderno/domain/Note";

export default class Drive {

    protected rootFolderId : string;
    protected apiKey : string;
    protected clientId : string;


    constructor(apiKey:string, clientId:string) {
        this.apiKey = apiKey;
        this.clientId = clientId;
    }

    protected loadLibraries() {
        var loadedPromise = new Promise(function(resolve, reject){
            var newScript = document.createElement('script');
            newScript.src = "https://apis.google.com/js/api.js";
            newScript.defer = true;
            newScript.onload = function(){
                resolve();
            }
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(newScript, firstScriptTag);
        });
        return loadedPromise;
    }

    public init() {
       gapi.client.init({
         apiKey: API_KEY,
         clientId: CLIENT_ID,
         discoveryDocs: DISCOVERY_DOCS,
         scope: SCOPES
       }).then(function () {
         // Listen for sign-in state changes.
         gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

         // Handle the initial sign-in state.
         updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
         authorizeButton.onclick = handleAuthClick;
         signoutButton.onclick = handleSignoutClick;
       });
     }

    public createRootFolder() {
        var parentId = '';
        var fileMetadata = {
            'name' : 'Caderno Notes',
            'mimeType' : 'application/vnd.google-apps.folder'
        };
        return gapi.client.drive.files.create({
            resource: fileMetadata,
        });
           // .then(function(response) {
           // switch(response.status){
           // case 200:
           //     var // FIXME: le = response.result;
           //     console.log('Created Folder Id: ', file.id);
           //     createFile(file.id);
           //     break;
           // default:
           //     console.log('Error creating the folder, '+response);
           //     break;
           // }
        //});

    }


    public createNote(note:Note) {
        var parentFolderId = this.rootFolderId;
        var fileMetadata = {
            name: note.title,
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

        // TODO
        //.then(function (req, file) {
        //console.log('File Id: ', req.result.id);
        //updateFileContent(req.result.id, 'content', function(){console.log('done');});
        //});
    }


    public updateFileContent(note:Note, callback) {
       var xhr = new XMLHttpRequest();
       xhr.responseType = 'json';
       xhr.onreadystatechange = function() {
         if (xhr.readyState != XMLHttpRequest.DONE) {
           return;
         }
         callback(xhr.response);
       };
       xhr.open('PATCH', 'https://www.googleapis.com/upload/drive/v3/files/' + fileId + '?uploadType=media');
       xhr.setRequestHeader('Authorization', 'Bearer ' + gapi.auth.getToken().access_token);
       xhr.setRequestHeader('Content-Type', 'text/html; charset=utf-8');
       xhr.send(contentBlob);
     }

}
