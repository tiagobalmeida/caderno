import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import Drive from "jz/caderno/storage/Drive";
import BrowserStorage from "jz/caderno/storage/BrowserStorage";


@UI5("jz.caderno.Component")
export default class Component extends UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    public init(): void {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        // set the data model
        BrowserStorage.getInstance(this).initialize();
        // enable Google Drive support
        this.initDrive();
        // enable local model support
        this.initBrowserStorage();
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
    }

    private initBrowserStorage(): void {
        var storage = new BrowserStorage(this);
        storage.initialize();
    }

    private initDrive(): void {
        var clientId = "382123780150-kcqmtbn64bg5m842kkd36borad6hsbd0.apps.googleusercontent.com";
        var apiKey = "TIXME";

        Drive.configure(clientId, apiKey);
        var d = Drive.getInstance();
        d.loadLibraries().then(
            function(){
                d.initialize();
            }
        );
    }
}
