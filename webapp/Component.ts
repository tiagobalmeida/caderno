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
        // this.initDrive();
        // enable local model support
        this.initBrowserStorage();
        // this.createWelcomeNote();
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
    }

    protected initBrowserStorage(): void {
        var that = this;
        var storage = new BrowserStorage(this);
        // storage.initialize takes a function used to
        // transform the plain object from local storage
        // before being put into the model. We use this
        // to convert into proper Note instances.
        storage.initialize((n:any) => {
            var note = new Note(that);
            note.title = n.title;
            note.content = n.content;
            return note;
        });
    }

    protected createWelcomeNote(): void {
        var storage = BrowserStorage.getInstance(this);
        var note = new Note(this);
        note.title = "Welcome";
        note.content = "";
        storage.createFile(note);
    }

    protected initDrive(): void {
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
