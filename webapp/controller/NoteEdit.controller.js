var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "jz/caderno/controller/BaseController", "jz/caderno/util/Constants", "jz/caderno/util/Navigator"], function (require, exports, BaseController_1, Constants_1, Navigator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoteEdit = /** @class */ (function (_super) {
        __extends(NoteEdit, _super);
        function NoteEdit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoteEdit.prototype.onInit = function () {
            // Initialize the view model (view properties)
            _super.prototype.onInit.call(this);
            // Set handler for the route.
            this.getRouter().attachRouteMatched(this.routeName, this.onRouteMatched);
            var model = this.getViewModel();
            model.setProperty("/note", {
                name: "",
                content: ""
            });
            this.navigate = new Navigator_1.default(this);
        };
        NoteEdit.prototype.onRouteMatched = function (oEvent) {
            var args = oEvent.getParameters();
            if (args.noteId === Constants_1.default.NOTE_ID_NEW) {
            }
        };
        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        NoteEdit.prototype.doSaveNote = function (oEvent) {
            // To save a note, we first determine where to save it.
            // This is stored in the AppSettings model.
            var settings = this.AppSettings;
            //if (settings.save.method === Constants.NOTE_SAVE_METHOD_REST){
            //}
            var dataModel = _super.prototype.getModel.call(this, "data");
            var notes = dataModel.getProperty("/notes");
            var content = oEvent.getParameters().content;
            var name = this.getViewModel().getProperty("/note/name");
            notes = notes.concat(this._newNote(name, content));
            dataModel.setProperty("/notes", notes);
            //
            this.navigate.toNoteRead(1);
        };
        NoteEdit.prototype._newNote = function (name, content) {
            var note = {
                name: name,
                content: content,
                isSelected: false
            };
            return Object.assign({}, note);
        };
        NoteEdit.routeName = "note-edit";
        NoteEdit = __decorate([
            UI5("jz.caderno.controller.NoteEdit")
        ], NoteEdit);
        return NoteEdit;
    }(BaseController_1.default));
    exports.default = NoteEdit;
});
