import Note from "jz/Note/caderno/domain/Note";

export default class BrowserStorage {

    protected component: sap.ui.core.Component;

    public constructor(component: sap.ui.core.Component){
        this.component = component;
    }

    public static getInstance(component: sap.ui.core.Component) : BrowserStorage{
        return new BrowserStorage(component);
    }

    public createFile(name:string) : Promise<string>{
        var that = this;
        var p = new Promise<string>(function(resolve, reject){
            var dataModel = that.component.getModel("data");
            var notes = <Array<Note>>dataModel.getProperty("/notes");
            var id = notes.length;
        };
        return p;
    }
}
