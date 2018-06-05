import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import Drive from "jz/caderno/storage/Drive";


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
        // enable Google Drive support
        this.initDrive();
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

    private initDrive(): void {
        var clientId = "382123780150-kcqmtbn64bg5m842kkd36borad6hsbd0.apps.googleusercontent.com";
        var apiKey = "fixme";

        Drive.configure(clientId, apiKey);
        var d = Drive.getInstance();
        d.loadLibraries().then(
            function(){
                d.initialize();
            }
        );
    }
}
