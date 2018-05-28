import BaseController from "jz/caderno/controller/BaseController"
import Constants from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";
import Drive from "jz/caderno/storage/Drive";

@UI5("jz.caderno.controller.DriveLogin")
export default class DriveLogin extends BaseController {

    static readonly routeName = "drive-login";

    protected navigate: Navigator;

    onInit() {
        // Initialize the view model (view properties)
        super.onInit();
        // Set handler for the route.
        this.getRouter().attachRouteMatched(this.routeName,
            this.onRouteMatched);
        var model = this.getViewModel();
        this.navigate = new Navigator(this);
    }


    onRouteMatched(oEvent: any) {

    }


    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doDriveAuthorize(oEvent: any): void {
        //
        var drive = Drive.getInstance();
        drive.authorize();
    }


    _newNote(name: string, content: string): any {
        var note = {
            name: name,
            content: content,
            isSelected: false
        };
        return Object.assign({}, note);
    }

}
