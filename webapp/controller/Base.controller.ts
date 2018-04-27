import Controller from "sap/ui/core/mvc/Controller";
import Model      from "sap/ui/model/Model";
import JSONModel  from "sap/ui/model/json/JSONModel";
import Constants  from "jz/caderno/util/Constants";

@UI5("jz.caderno.controller.BaseController")
export default class BaseController extends Controller {

    routeName: String;
    AppSettings: Model;
    Constants: Constants;

    init() {
        // Initialize the view model (view properties)
        super.getView().setModel(new JSONModel({}, false), "view");
        // Set handler for the route.
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        // Initialize controller level shortcuts
        this.AppSettings = this.getModel("AppSettings");
        this.Constants = Constants;
    }

    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doCreateNote() {
        this.getRouter().navTo("note-edit", {
            noteId: this.Constants.NOTE_ID_NEW
        });
    }

    // ============================================================
    // Utility methods
    // ============================================================
    getModel(name) {
        return super.getView().getModel(name);
    }

    getRouter() {
        return this.getOwnerComponent().getRouter();
    }

    getAppSettings(){
        return this.getView().getModel("appSettings");
    }

    todo() {
        alert("Oops! that isn't done yet.");
    }

}
