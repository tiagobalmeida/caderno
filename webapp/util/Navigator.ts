export default class Navigator {

    // ============================================================
    // Constants
    // ============================================================

    _controller: sap.ui.core.mvc.Controller;

    constructor(controller:sap.ui.core.mvc.Controller){
        this._controller = controller;
    }

    protected getRouter(controller:sap.ui.core.mvc.Controller):sap.ui.core.routing.Router {
        return (<sap.ui.core.UIComponent>controller.getOwnerComponent()).getRouter();
    }

    public toNoteRead(noteId:any):void {
        this.getRouter(this._controller).navTo("note-read",
                                               {
                                                   noteId: noteId
                                               },
                                               false);
    }
};
