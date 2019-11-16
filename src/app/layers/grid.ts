import { Config } from "../config";
import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";

export function drawGrid(context: CanvasRenderingContext2D): void {
    const renderer = new PixelRenderer(context);

    renderer.strokeStyle('#000000');
    renderer.lineWidth(0.02);

    // Draw vertical lines
    for (let x = 0; x < Config.size.width; x++) {
        renderer.moveTo(new Vector2D(x, 0));
        renderer.lineTo(new Vector2D(x, Config.size.height));
    }

    // Draw horizontal lines
    for (let y = 0; y < Config.size.height; y++) {
        renderer.moveTo(new Vector2D(0, y));
        renderer.lineTo(new Vector2D(Config.size.width, y));
    }
}
