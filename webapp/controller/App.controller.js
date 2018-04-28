sap.ui.define([
	"jz/caderno/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("jz.caderno.controller.App", {

        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        doEditSettings: function () {
            this.getRouter().navTo("settings");
        }

	});
});
