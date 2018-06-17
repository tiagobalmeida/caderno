import BrowserStorage from "jz/caderno/storage/BrowserStorage";
import Drive from "jz/caderno/storage/Drive";

export default class Note {
    // A Note represents a note with a title and a content.
    // It knows how to save itself both in Drive and in local models
    // It has a reference to the application because it knows about the
    // component which meeds to be passed in on construction.
    //
    public title: string;
    public content: string;
    protected localFileId: string = ""; // file Id on browser storage
    protected driveFileId: string = ""; // file id on drive storage
    protected savedOnDrive: boolean = false;
    protected component: sap.ui.core.Component;

    public constructor(component:sap.ui.core.Component){
        this.component = component;
    }

    /**
     * Returns an object with only the data fields.
     **/
    public exportPlain():any {
        return {
            title: this.title,
            content: this.content,
            localFileId: this.localFileId,
            driveFileId: this.driveFileId,
            savedOnDrive: this.savedOnDrive
        };
    }

    public save(){
        this.browserSave();
        //this.driveSave();
    }

    public browserSave(){
        var that = this;
        var storage = BrowserStorage.getInstance(this.component);
        if(this.localFileId === "") {
            storage.createFile(this).then(function(fileId){
                storage.updateFileContent(that.content, fileId);
                that.localFileId = fileId;
            });
        }else{
            storage.updateFileContent(that.content, that.localFileId);
        }
    }

    public driveSave(){
        if(this.driveFileId === ""){
            console.log("Note: Creating a new file");
            return this.driveNewFileSave();
        }else{
            console.log("Note: Updating existing file");
            return this.driveExistingFileSave();
        }
    }

    protected driveExistingFileSave(){
        var that = this;
        var drive = Drive.getInstance();
        drive.initialize()
            .then(function(){
                that.savedOnDrive = true;
                console.log(`Note ${that.title} saved on google drive. File Id = ${that.driveFileId}`);
                console.log("Updating file content");
                return drive.updateFileContent(that.content, that.driveFileId);
            })
            .catch(
                function(){
                    console.log("Failed to update file in drive 1."); // TODO
                });
    }

    protected driveNewFileSave(){
        var that = this;
        var drive = Drive.getInstance();
        drive.initialize()
            .then(
                function(){
                    console.log("Drive has been initialized. Creating the file.");
                    return drive.createFile(that.title)
                })
            .then(
                function(request:any, file:any){
                    console.log("File has been created in drive.");
                    var fileId = request.result.id;
                    that.driveFileId = fileId;
                    that.savedOnDrive = true;
                    console.log(`Note ${that.title} saved on google drive. File Id = ${fileId}`);
                    console.log("Updating file content");
                    return drive.updateFileContent(that.content, that.driveFileId);
                })
            .catch(
                function(){
                    console.log("Failed to save do drive 1."); // TODO
                });
    }


    onDriveFail(value:any) {
        console.log(`Note ${this.title} failed to save on google drive.`);
    }

}
