/* global sap */
sap.ui.define([
	"jz/caderno/controller/Base.controller"
], function(BaseController) {
	"use strict";

	return BaseController.extend("jz.caderno.controller.Settings", {

        routeName: "settings",
        
        init: function () {
            BaseController.init.apply(arguments);
        },

        onRouteMatched: function (oEvent) {
        }

        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================

	});
});
