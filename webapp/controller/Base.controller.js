sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "jz/caderno/util/constants"
], function(Controller,
            JSONModel,
            Constants) {
	"use strict";

	return Controller.extend("jz.caderno.controller.Base", {
        
        init: function () {
            // Initialize the view model (view properties)
            this.getView().setModel(new JSONModel(), "view");
            // Set handler for the route.
            this.getRouter().attachRouteMatched(this.routeName,
                                                this.onRouteMatched);
            // Initialize controller level shortcuts
            this.AppSettings = this.getModel("AppSettings");
            this.Constants = Constants;
        },
        
        
        // ============================================================
        // User Action handlers. They should all start with "do"
        // ============================================================
        doCreateNote:function () {
            this.getRouter().navTo("note-edit", {
                noteId: this.Constants.NOTE_ID_NEW
            });
        },

        // ============================================================
        // Utility methods
        // ============================================================
        getModel: function (name) {
            return this.getView().getModel(name);
        },

        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        getAppSettings: function(){
            return this.getView().getModel("appSettings");
        },
        
        todo: function(){
            alert("Oops! that isn't done yet.");
        }

	});
});
