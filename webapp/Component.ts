import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import Drive from "jz/caderno/storage/Drive";
import BrowserStorage from "jz/caderno/storage/BrowserStorage";
import Note from "jz/caderno/domain/Note";


@UI5("jz.caderno.Component")
export default class Component extends UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    public init(): void {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);
        // enable Google Drive support
        this.initDrive();
        // enable local model support
        this.initBrowserStorage();
        this.importNotesFromBrowserStorage();
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
    }

    private initBrowserStorage(): void {
        var that = this;
        var storage = new BrowserStorage(this);
        storage.initialize((n:any) => {
            var note = new Note(that);
            note.title = n.title;
            note.content = n.content;
            return note;
        });
    }

    protected importNotesFromBrowserStorage(): void {

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
