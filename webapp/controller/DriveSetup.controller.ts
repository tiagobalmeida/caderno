import BaseController from "jz/caderno/controller/BaseController";
import Constants  from "jz/caderno/util/Constants";
import Navigator from "jz/caderno/util/Navigator";
import Drive from "jz/caderno/storage/Drive";

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

    onDriveExperienceComplete():void {
        var currentStep = <sap.m.WizardStep>this.getView().byId("DriveExperienceBranchStep");
        var key = <string>this.getView().getModel("viewProperties").getProperty("/driveExperience");
        // key is either 'firstTime' or 'returning'
        if ( key === 'firstTime') {
            currentStep.setNextStep("FirstTimeSetupStep");
        } else {
            currentStep.setNextStep("ReturningSetupStep");
        }
    }

    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doA(oEvent:any):void {

    }

    doStartAuthorization(): void {
        Drive.getInstance().signIn();
        console.log("DriveSetup: start authorization");
    }

    /**
     * Used to select between first time use of drive
     * or if the user already has stuff in drive.
     **/
    setDriveExperience(event:sap.ui.base.Event): void {
        var key = <sap.m.SegmentedButtonItem>event.getParameter("key");
        this.getView().getModel("viewProperties").setProperty("/driveExperience", key);
    }



}
