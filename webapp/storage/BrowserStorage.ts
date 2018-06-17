import JSONModel from "sap/ui/model/json/JSONModel";


export default class BrowserStorage {

    protected component: sap.ui.core.Component;

    public constructor(component: sap.ui.core.Component){
        this.component = component;
    }

    public static getInstance(component: sap.ui.core.Component) : BrowserStorage{
        return new BrowserStorage(component);
    }

    /**
     * Initializes itself from local storage
     **/
    public initialize(noteTransformer: (n:any) => any) {
        // make sure there is a data model.
        var model = this.component.getModel("data");
        if(!model){
            model = new JSONModel({}, false);
            this.component.setModel(model, "data");
        }
        var data = localStorage.getItem("jz.caderno.storage.notes");
        if(data===null){
            model.setProperty("/notes", []);
        }else{
            var dataParsed:any;
            if (data) {
                dataParsed = JSON.parse(data);
                // convert them to Note instances
                dataParsed = dataParsed.map((n:any) => noteTransformer(n));
            } else {
                dataParsed = [];
            }
            // TODO: what if data.notes is null?
            model.setProperty("/notes", dataParsed);
        }
    }

    /**
     * Returns Note instance from note.
     **/
    protected importNote(n:any) {
        var note = n;//new Note(this.component);
        note.title = n.title;
        note.content = n.content;
        return note;
    }

    public createFile(note:any) : Promise<string>{
        var that = this;
        var id:string = "";

        var p = new Promise<string>(function(resolve, reject){
            var dataModel = that.component.getModel("data");
            if(dataModel === undefined) {
                dataModel = new JSONModel([],false);
            }
            var notes = <Array<any>>dataModel.getProperty("/notes");
            id = notes.length.toString();
            notes.push(note);
            // save this in local storage.
            that.overwriteLocalStorage();
            // return a resolved promise as this is a synchronous operation.
            resolve(id);
        });
        return p;
    }

    /**
     * Takes the content of the notes property under the
     * "data" model and dumps it into the local
     * browser storage. Under jz.caderno.storage.
     **/
    protected overwriteLocalStorage() {
        var saved = true;
        var model = this.component.getModel("data");
        var notes:Array<Note> = <Array<Note>>model.getProperty("/notes");
        if ( !notes ) {
            notes = [];
        }
        var notesAsJSON = "";
        try {
            var notesExport = notes.map(n => n.exportPlain());
            notesAsJSON = JSON.stringify(notesExport);
        } catch (e) {
            return false;
        }
        try {
            localStorage.setItem("jz.caderno.storage.notes", notesAsJSON);
            console.log("BrowserStorage: Saved notes to local storage.");
        }catch(e){
            if(e instanceof QuotaExceededError){
                console.error(
                    "BrowserStorage: Could not setItem to local storage."
                        + "Are you in private mode?");
            }
            saved = false;
        }
        return saved;
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
