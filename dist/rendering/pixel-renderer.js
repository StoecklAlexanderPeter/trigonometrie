"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unit_converter_1 = require("./unit-converter");
var PixelRenderer = /** @class */ (function () {
    function PixelRenderer(context) {
        this.context = context;
    }
    PixelRenderer.prototype.fillStyle = function (color) {
        this.context.fillStyle = color;
        return this;
    };
    PixelRenderer.prototype.strokeStyle = function (color) {
        this.context.strokeStyle = color;
        return this;
    };
    PixelRenderer.prototype.lineWidth = function (lineWidth) {
        this.context.lineWidth = unit_converter_1.UnitConverter.toPixels(lineWidth);
        return this;
    };
    PixelRenderer.prototype.moveTo = function (v) {
        this.context.moveTo(unit_converter_1.UnitConverter.toPixels(v.x), unit_converter_1.UnitConverter.toPixels(v.y));
        return this;
    };
    PixelRenderer.prototype.lineTo = function (v) {
        this.context.lineTo(unit_converter_1.UnitConverter.toPixels(v.x), unit_converter_1.UnitConverter.toPixels(v.y));
        return this;
    };
    PixelRenderer.prototype.drawLine = function (v1, v2) {
        this.context.beginPath();
        this.moveTo(v1);
        this.lineTo(v2);
        this.context.closePath();
        return this;
    };
    PixelRenderer.prototype.drawCircle = function (position, radius) {
        this.context.beginPath();
        this.context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        this.context.closePath();
        return this;
    };
    return PixelRenderer;
}());
exports.PixelRenderer = PixelRenderer;
//# sourceMappingURL=pixel-renderer.js.map