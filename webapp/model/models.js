define(["require", "exports", "sap/ui/model/json/JSONModel", "sap/ui/Device", "jz/caderno/util/Constants"], function (require, exports, JSONModel_1, Device_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        createDeviceModel: function () {
            //TODO|ui5ts: generate constructors
            var oModel = new JSONModel_1.default(Device_1.default, false);
            oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            return oModel;
        },
        createAppSettingsModel: function () {
            // create an object with the default application settings
            var defaults = {
                save: {
                    method: Constants_1.default.NOTE_SAVE_METHOD_GDRIVE
                }
            };
            var oModel = new JSONModel_1.default(defaults, false);
            return oModel;
        },
    };
});
//# sourceMappingURL=models.js.map