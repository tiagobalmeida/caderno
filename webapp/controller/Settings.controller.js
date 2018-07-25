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
define(["require", "exports", "jz/caderno/controller/BaseController", "jz/caderno/util/Navigator", "jz/caderno/domain/AppSettings"], function (require, exports, BaseController_1, Navigator_1, AppSettings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Settings = /** @class */ (function (_super) {
        __extends(Settings, _super);
        function Settings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Settings.prototype.onInit = function () {
            _super.prototype.onInit.call(this);
            this.getRouter().attachRouteMatched(this.routeName, this.onRouteMatched);
            this.navigate = new Navigator_1.default(this);
            var appSettings = new AppSettings_1.default();
            this.getView().setModel(new sap.ui.model.json.JSONModel(appSettings, false), "appSettings");
        };
        Settings.prototype.onRouteMatched = function (oEvent) {
        };
        Settings.routeName = "settings";
        Settings = __decorate([
            UI5("jz.caderno.controller.Settings")
        ], Settings);
        return Settings;
    }(BaseController_1.default));
    exports.default = Settings;
});
