import BaseController from "jz/caderno/controller/BaseController"


@UI5("jz.caderno.controller.NoteEdit")
export default class NoteEdit extends BaseController {

    static readonly routeName = "note-edit";

    onRouteMatched(oEvent:any) {
        var args = oEvent.getParameters();
        if (args.noteId === super.Constants.NOTE_ID_NEW) {

        }
    }


    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doSaveNote():void {
        // To save a note, we first determine where to save it.
        // This is stored in the AppSettings model.
        var settings = this.AppSettings;
        if (settings.save.method === this.Constants.NOTE_SAVE_METHOD_REST){

        }
        var dataModel = this.getModel<sap.ui.model.json.JSONModel>("data");
        var notes = dataModel.getProperty("/notes");
        dataModel.setProperty("/notes", notes.push(this._newNote()));
        
    }

    _newNote():any {
        var note = this.getModel("view").getProperty("/note");
        return Object.assign({}, note);
    }

}
