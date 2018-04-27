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
define(["require", "exports", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "jz/caderno/util/Constants"], function (require, exports, Controller_1, JSONModel_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseController = /** @class */ (function (_super) {
        __extends(BaseController, _super);
        function BaseController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BaseController.prototype.init = function () {
            // Initialize the view model (view properties)
            _super.prototype.getView.call(this).setModel(new JSONModel_1.default({}, false), "view");
            // Set handler for the route.
            this.getRouter().attachRouteMatched(this.routeName, this.onRouteMatched);
            // Initialize controller level shortcuts
            this.AppSettings = this.getModel("AppSettings");
            this.Constants = Constants_1.default;
        };
        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        BaseController.prototype.doCreateNote = function () {
            this.getRouter().navTo("note-edit", {
                noteId: this.Constants.NOTE_ID_NEW
            });
        };
        // ============================================================
        // Utility methods
        // ============================================================
        BaseController.prototype.getModel = function (name) {
            return _super.prototype.getView.call(this).getModel(name);
        };
        BaseController.prototype.getRouter = function () {
            return this.getOwnerComponent().getRouter();
        };
        BaseController.prototype.getAppSettings = function () {
            return this.getView().getModel("appSettings");
        };
        BaseController.prototype.todo = function () {
            alert("Oops! that isn't done yet.");
        };
        BaseController = __decorate([
            UI5("jz.caderno.controller.BaseController")
        ], BaseController);
        return BaseController;
    }(Controller_1.default));
    exports.default = BaseController;
});
//# sourceMappingURL=Base.controller.js.map