import UIComponent from "sap/ui/core/UIComponent";
import models from "jz/caderno/model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import Drive from "jz/caderno/storage/Drive";
import BrowserStorage from "jz/caderno/storage/BrowserStorage";
import Note from "jz/caderno/domain/Note";
import AppSettings from "jz/caderno/domain/AppSettings";

@UI5("jz.caderno.Component")
export default class Component extends UIComponent {
    public static metadata: any = {
        manifest: "json"
    };

    public init(): void {
        // call the base component's init function
        super.init();
        var appSettings = new AppSettings();
        appSettings.load();
        // enable local model support
        this.initBrowserStorage();
        // enable Google Drive support
        this.initDrive(appSettings.driveRootFolderId);
        // this.createWelcomeNote();
        // enable routing
        this.getRouter().initialize();
        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        // set the appSettings model
        // this.setModel(models.createAppSettingsModel(), "appSettings");
        //UIComponent.prototype.init.apply(this, arguments);
    }

    protected initBrowserStorage(): void {
        var that = this;
        var storage = new BrowserStorage(this);
        // storage.initialize takes a function used to
        // transform the plain object from local storage
        // before being put into the model. We use this
        // to convert into proper Note instances.
        storage.initialize((n: any) => {
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

    protected initDrive(rootFolder:string|null): void {
        var modulePath = jQuery.sap.getModulePath("jz.caderno.storage") + "/creds.drive.json";
        var credentialsModel = new sap.ui.model.json.JSONModel(modulePath, false);
        credentialsModel.attachRequestCompleted(function() {
            var creds = credentialsModel.getProperty("/");
            Drive.configure(creds.client, creds.api);
            var d = Drive.getInstance();
            if ( rootFolder ) {
                d.setRootFolderId(rootFolder);
            }
            d.loadLibraries().then(
                function() {
                    d.initialize()
                    // When drive is loaded, load everything
                        .then(function(){
                            return d.listFiles();
                        });
                        //.then(f => {
                        //    var a = 1;
                       // });
                }
            );
        }, this);
    }
}
