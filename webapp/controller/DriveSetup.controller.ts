import BaseController from "jz/caderno/controller/BaseController";
import Constants  from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";

@UI5("jz.caderno.controller.DriveSetup")
export default class DriveSetup extends BaseController {

    static readonly routeName = "drive-setup";

    protected navigate:Navigator;

    onInit() {
        super.onInit();
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        this.navigate = new Navigator(this);
    }

    onRouteMatched(oEvent:any) {

    }


    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doA(oEvent:any):void {

    }

}
