import BaseController from "jz/caderno/controller/BaseController"
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
        // To save a note, we first determine where to save it.
        // This is stored in the AppSettings model.
        var settings = this.AppSettings;
        var dataModel = super.getModel<sap.ui.model.json.JSONModel>("data");
        var notes = <Array<any>>dataModel.getProperty("/notes");
        var content = oEvent.getParameters().content;
        var name = <string>this.getViewModel().getProperty("/note/name");
        var note = this._newNote(name, content);
        notes = notes.concat(note);
        dataModel.setProperty("/notes", notes);
        // Save note on Drive
        var drive = Drive.getInstance();
        var that = this;
        drive.initialize().then(function(){
            drive.createFile(note.title)
                .then(that.onDriveCreated,
                      that.onDriveFail);
        });
        //this.navigate.toNoteRead(1);

    }


    onDriveCreated(value:any) {
        console.log("Note saved on google drive.");
    }

    onDriveFail(value:any) {
        console.log("Note failed to save.");
    }

    _newNote(name:string, content:string):Note {
        var note = new Note();
        note.title = name;
        note.content = content;
        return note;
    }

}
