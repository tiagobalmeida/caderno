import Controller from "sap/ui/core/mvc/Controller";

@UI5("jz.caderno.controller.BaseController")
export default class BaseController extends Controller {

  init() {
    // Initialize the view model (view properties)
    this.getView().setModel(new JSONModel(), "view");
    // Set handler for the route.
    this.getRouter().attachRouteMatched(this.routeName,
                                        this.onRouteMatched);
    // Initialize controller level shortcuts
    this.AppSettings = // TODO: his.getModel("AppSettings");
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
    return this.getView().getModel(name);
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
