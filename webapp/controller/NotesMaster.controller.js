/* global sap */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "jz/caderno/util/Service"
], function(Controller,
            JSONModel,
            Service) {
	"use strict";

	return Controller.extend("jz.caderno.controller.NotesMaster", {

        /**
         * 
         * @param {object} name
         * @returns {object}
         */
        onInit: function(){
            this.getView().setModel(new JSONModel(this._initialModelData()));
        },

        
        /**
         * 
         * @param {object} name
         * @returns {object}
         */
        _initialModelData: function(arg) {
            return {
                tags: Service.getTags()
            };
        }

	});
});
