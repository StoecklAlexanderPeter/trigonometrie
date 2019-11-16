"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnitConverter = /** @class */ (function () {
    function UnitConverter() {
    }
    UnitConverter.toPixels = function (units) {
        return units * this.UNIT_SIZE;
    };
    UnitConverter.toUnits = function (pixels) {
        return pixels / this.UNIT_SIZE;
    };
    UnitConverter.setUnitSize = function (unitSize) {
        this.UNIT_SIZE = unitSize;
    };
    UnitConverter.UNIT_SIZE = 1;
    return UnitConverter;
}());
exports.UnitConverter = UnitConverter;
//# sourceMappingURL=unit-converter.js.map