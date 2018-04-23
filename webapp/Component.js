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
define(["require", "exports", "sap/ui/core/UIComponent"], function (require, exports, UIComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = /** @class */ (function (_super) {
        __extends(Component, _super);
        function Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Component.prototype.init = function () {
            // call the base component's init function
            UIComponent_1.default.prototype.init.apply(this, arguments);
            // enable routing
            this.getRouter().initialize();
            // set the device model
            // this.setModel(models.createDeviceModel(), "device");
            // set the appSettings model
            // this.setModel(models.createAppSettingsModel(), "appSettings");
        };
        Component.metadata = {
            manifest: "json"
        };
        Component = __decorate([
            UI5("jz.caderno.Component")
        ], Component);
        return Component;
    }(UIComponent_1.default));
    exports.default = Component;
});
//# sourceMappingURL=Component.js.map