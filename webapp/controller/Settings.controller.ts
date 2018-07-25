import BaseController from "jz/caderno/controller/BaseController";
import Navigator from "jz/caderno/util/Navigator";
import AppSettings from "jz/caderno/domain/AppSettings";

@UI5("jz.caderno.controller.Settings")
export default class Settings extends BaseController {

    private navigate: Navigator;
    static readonly routeName = "settings";

    onInit() {
        super.onInit();
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        this.navigate = new Navigator(this);
        var appSettings = new AppSettings();
        this.getView().setModel(
            new sap.ui.model.json.JSONModel(
                appSettings, false),
            "appSettings");
    }

    onRouteMatched(oEvent:any) {

    }

}
