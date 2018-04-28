import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";
import JSONModel from "sap/ui/model/json/JSONModel";

@UI5("jz.caderno.Component")
export default class Component extends UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    public init(): void {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        // set the data model
        this.initDataModel();
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
        
    }

    private initDataModel(): void {
        this.setModel(new JSONModel({
            notes: [{name:"a", isSelected: false}]
        }, false), "data");
    }
}
