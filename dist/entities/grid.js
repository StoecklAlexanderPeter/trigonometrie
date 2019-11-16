"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var vector_1 = require("../math/vector");
var pixel_renderer_1 = require("../rendering/pixel-renderer");
function drawGrid(context) {
    var renderer = new pixel_renderer_1.PixelRenderer(context);
    renderer.strokeStyle('#000000');
    renderer.lineWidth(0.02);
    // Draw vertical lines
    for (var x = 0; x < config_1.Config.size.width; x++) {
        renderer.moveTo(new vector_1.Vector2D(x, 0));
        renderer.lineTo(new vector_1.Vector2D(x, config_1.Config.size.height));
    }
    // Draw horizontal lines
    for (var y = 0; y < config_1.Config.size.height; y++) {
        renderer.moveTo(new vector_1.Vector2D(0, y));
        renderer.lineTo(new vector_1.Vector2D(config_1.Config.size.width, y));
    }
}
exports.drawGrid = drawGrid;
//# sourceMappingURL=grid.js.map