import BaseController from "jz/caderno/controller/BaseController";
import Navigator from "jz/caderno/util/Navigator";

@UI5("jz.caderno.controller.App")
export default class App extends BaseController {

    protected navigate:Navigator;

    onInit() {
        super.onInit();
        this.navigate = new Navigator(this);
    }
    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================

    doEditSettings() {
      this.getRouter().navTo("settings");
    }

    doDriveSetup() {
        this.navigate.toDriveSetup();
    }

}
