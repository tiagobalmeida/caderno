define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Service = /** @class */ (function () {
        function Service() {
        }
        Service.getTags = function () {
            var toTag = function (name) { return { name: name, selected: false }; };
            return ["UI5", "Password", "ABAP", "SCP"].map(toTag);
        };
        Service.getNotes = function () {
            return [];
        };
        return Service;
    }());
    exports.default = Service;
});
//# sourceMappingURL=Service.js.map