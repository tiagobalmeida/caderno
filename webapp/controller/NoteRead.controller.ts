import BaseController from "jz/caderno/controller/BaseController"
import Constants  from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";


@UI5("jz.caderno.controller.NoteEdit")
export default class NoteRead extends BaseController {

    static readonly routeName = "note-read";

    protected navigate:Navigator;

    onInit() {
        // Initialize the view model (view properties)
        super.onInit();
        // Set handler for the route.
        this.getRouter().attachRouteMatched(this.routeName,
                                            this.onRouteMatched);
        var model = this.getViewModel();
        model.setProperty("/note", {
            name: "",
            content: ""
        });
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
