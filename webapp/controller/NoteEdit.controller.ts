import BaseController from "jz/caderno/controller/BaseController"
import Constants  from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";


@UI5("jz.caderno.controller.NoteEdit")
export default class NoteEdit extends BaseController {

    static readonly routeName = "note-edit";

    protected navigate:Navigator;

    onInit() {
        // Initialize the view model (view properties)
        super.onInit();
        // Set handler for the route.
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        var model = this.getViewModel();
        model.setProperty("/note", {
            name: "",
            content: ""
        });
        this.navigate = new Navigator(this);
    }

    onRouteMatched(oEvent:any) {
        var args = oEvent.getParameters();
        if (args.noteId === Constants.NOTE_ID_NEW) {

        }
    }


    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doSaveNote(oEvent:any):void {
        // To save a note, we first determine where to save it.
        // This is stored in the AppSettings model.
        var settings = this.AppSettings;
        //if (settings.save.method === Constants.NOTE_SAVE_METHOD_REST){

        //}
        var dataModel = super.getModel<sap.ui.model.json.JSONModel>("data");
        var notes = <Array<any>>dataModel.getProperty("/notes");
        var content = oEvent.getParameters().content;
        var name = <string>this.getViewModel().getProperty("/note/name");
        notes = notes.concat(this._newNote(name, content));
        dataModel.setProperty("/notes", notes);
        //
        this.navigate.toNoteRead(1);

    }

    _newNote(name:string, content:string):any {
        var note = {
            name: name,
            content: content,
            isSelected: false
        };
        return Object.assign({}, note);
    }

}
