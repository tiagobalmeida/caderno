/* global sap */
import JSONModel from "sap/ui/model/json/JSONModel";
import Device    from "sap/ui/Device";
import Constants from "jz/caderno/util/Constants";

export default {

    createDeviceModel(): JSONModel {
        //TODO|ui5ts: generate constructors
        var oModel = new JSONModel(Device, false);
        oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
        return oModel;
    },

    createAppSettingsModel(): JSONModel {
        // create an object with the default application settings
        var defaults = {
            save: {
                method: Constants.NOTE_SAVE_METHOD_GDRIVE
            }
        };
	var oModel = new JSONModel(defaults, false);
	return oModel;
    },


};
