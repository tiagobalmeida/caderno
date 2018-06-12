import Note from "jz/caderno/domain/Note";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class BrowserStorage {

    protected component: sap.ui.core.Component;

    public constructor(component: sap.ui.core.Component){
        this.component = component;
    }

    public static getInstance(component: sap.ui.core.Component) : BrowserStorage{
        return new BrowserStorage(component);
    }

    public initialize() {
    }

    public createFile(note:Note) : Promise<string>{
        var that = this;
        var id:string = "";

        var p = new Promise<string>(function(resolve, reject){
            var dataModel = that.component.getModel("data");
            if(dataModel === undefined) {
                dataModel = new JSONModel([],false);
            }
            var notes = <Array<Note>>dataModel.getProperty("/notes");
            id = notes.length.toString();
            notes.push(note);
            // return a resolved promise as this is a synchronous operation.
            resolve(id);
        });
        return p;
    }

    public updateFileContent(content:string, fileId:string) {
        var that = this;
        var p = new Promise(function(resolve, reject){
            var dataModel = that.component.getModel("data");
            var notes = dataModel.getProperty("/notes");
            notes[parseInt(fileId, 10)].content = content;
            dataModel.setProperty("/notes", notes);
            resolve(notes);
        });
        return p;
    }

}
