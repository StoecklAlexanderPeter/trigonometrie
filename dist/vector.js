"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.add = function (v1, v2) {
        return new Vector2D(v1.x + v2.x, v1.y + v2.y);
    };
    Vector2D.subtract = function (v1, v2) {
        return new Vector2D(v1.x - v2.x, v1.y - v1.y);
    };
    Vector2D.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    Vector2D.prototype.magnitude = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Vector2D.prototype.angle = function () {
        return Math.atan(this.y / this.x);
    };
    return Vector2D;
}());
exports.Vector2D = Vector2D;
//# sourceMappingURL=vector.js.map