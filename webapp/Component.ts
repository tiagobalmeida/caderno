import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";

@UI5("jz.caderno.Component")
export default class Component extends UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    public init(): void {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
    }
}
