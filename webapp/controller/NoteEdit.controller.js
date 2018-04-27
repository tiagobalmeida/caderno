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
define(["require", "exports", "jz/caderno/controller/BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoteEdit = /** @class */ (function (_super) {
        __extends(NoteEdit, _super);
        function NoteEdit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NoteEdit.prototype.onRouteMatched = function (oEvent) {
            var args = oEvent.getParameters();
            if (args.noteId === _super.prototype.Constants.NOTE_ID_NEW) {
            }
        };
        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        NoteEdit.prototype.doSaveNote = function () {
            // To save a note, we first determine where to save it.
            // This is stored in the AppSettings model.
            alert("just Testing");
            var settings = this.AppSettings;
            if (settings.save.method === this.Constants.NOTE_SAVE_METHOD_REST) {
            }
        };
        NoteEdit.routeName = "note-edit";
        NoteEdit = __decorate([
            UI5("jz.caderno.controller.NoteEdit")
        ], NoteEdit);
        return NoteEdit;
    }(BaseController_1.default));
    exports.default = NoteEdit;
});
//# sourceMappingURL=NoteEdit.controller.js.map