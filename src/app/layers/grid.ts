import { Config } from "../config";
import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";

export function drawGrid(context: CanvasRenderingContext2D): void {
    const config = Config.getInstance();
    const renderer = new PixelRenderer(context);

    renderer.strokeStyle("#000000");
    renderer.lineWidth(0.02);
    renderer.beginPath();

    // Draw vertical lines
    for (let x = -config.size.width / 2; x < config.size.width / 2; x++) {
        renderer
        .moveTo(new Vector2D(x, -config.size.height / 2))
        .lineTo(new Vector2D(x, config.size.height / 2));
    }

    // Draw horizontal lines
    for (let y = -config.size.height / 2; y < config.size.height / 2; y++) {
        renderer
        .moveTo(new Vector2D(-config.size.width / 2, y))
        .lineTo(new Vector2D(config.size.width / 2, y));
    }
    renderer.stroke();

    renderer.lineWidth(0.06);
    renderer.drawLine(
        new Vector2D(0, config.size.height / 2),
        new Vector2D(0, -config.size.height / 2),
    );

    renderer.drawLine(
        new Vector2D(-config.size.width / 2, 0),
        new Vector2D(config.size.width / 2, 0),
    );
}
