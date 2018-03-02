sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
    "jz/caderno/util/constants"
], function(JSONModel, Device, Constants) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

        createAppSettingsModel: function() {
            // create an object with the default application settings
            var defaults = {
                save: {
                    method: Constants.NOTE_SAVE_METHOD_REST
                }
            };
			var oModel = new JSONModel(defaults);
			return oModel;
		}

	};
});
