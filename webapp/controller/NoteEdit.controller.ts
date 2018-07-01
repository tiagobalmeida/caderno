import BaseController from "jz/caderno/controller/BaseController";
import Constants  from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";
import Note from "jz/caderno/domain/Note";
import Drive from "jz/caderno/storage/Drive";


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
        var settings = this.AppSettings;
        var dataModel = super.getModel<sap.ui.model.json.JSONModel>("data");
        var notes = <Array<any>>dataModel.getProperty("/notes");
        var content = oEvent.getParameters().content;
        var viewModel = this.getViewModel();
        var name = <string>this.getViewModel().getProperty("/note/name");
        if(!viewModel.getProperty("/currentNote")){
            var note = this._newNote(name, content);
            viewModel.setProperty("/currentNote", note);
        }else{
            note = <Note>viewModel.getProperty("/currentNote");
            note.title = name;
            note.content = content;
        }
        var that = this;
        note.save();



        //this.navigate.toNoteRead(1);

    }




    _newNote(name:string, content:string):Note {
        var note = new Note(this.getOwnerComponent());
        note.title = name;
        note.content = content;
        return note;
    }

}
