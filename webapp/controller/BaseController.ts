import Controller from "sap/ui/core/mvc/Controller";
import Model      from "sap/ui/model/Model";
import JSONModel  from "sap/ui/model/json/JSONModel";
import Constants  from "jz/caderno/util/Constants";

@UI5("jz.caderno.controller.BaseController")
export default class BaseController extends Controller {

    protected routeName: String;
    protected AppSettings: Model;

    onInit() {
        // Initialize the view model (view properties)
        super.getView().setModel(new JSONModel({}, false), "view");
        // Set handler for the route.
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        // Initialize controller level shortcuts
        this.AppSettings = this.getModel("AppSettings");
    }

    getViewModel():sap.ui.model.json.JSONModel {
        return <sap.ui.model.json.JSONModel>super.getView().getModel("view");
    }

    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doCreateNote() {
        this.getRouter().navTo("note-edit", {
            noteId: Constants.NOTE_ID_NEW
        });
    }

    // ============================================================
    // Utility methods
    // ============================================================

    getRouter() {
        return this.getOwnerComponent().getRouter();
    }

    getAppSettings(){
        return this.getView().getModel("appSettings");
    }

    todo() {
        alert("Oops! that isn't done yet.");
    }

    /**
     * Convenience method for setting the view model in every controller of the application.
     * @public
     * @param {sap.ui.model.Model} oModel the model instance
     * @param {string} sName the model name
     * @returns {sap.ui.core.mvc.View} the view instance
     */
    public setModel(oModel: sap.ui.model.Model, sName?: string|undefined): sap.ui.core.mvc.View {
        let view = this.getView();
        view.setModel(oModel, sName);
        return view;
    }

    /**
     * Convenience method for getting the view model by name in every controller of the application.
     * @public
     * @param {string} sName the model name
     * @returns {sap.ui.model.Model} the model instance
     */
    public getModel<T extends sap.ui.model.Model = sap.ui.model.Model>(sName?: string): T {
        return <T>this.getView().getModel(sName);
    }

}
