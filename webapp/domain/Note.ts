import Drive from "jz/caderno/storage/Drive";

export default class Note {

    public title: string;
    public content: string;
    protected fileId: string;
    protected savedOnDrive: boolean = false;

    public save(){
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
                    that.fileId = fileId;
                    that.savedOnDrive = true;
                    console.log(`Note ${that.title} saved on google drive. File Id = ${fileId}`);
                    console.log("Updating file content");
                    return drive.updateFileContent(that.content, fileId);
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
