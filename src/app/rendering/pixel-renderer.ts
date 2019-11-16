import { Vector2D } from "../math/vector";
import { UnitConverter } from "./unit-converter";

export class PixelRenderer {
    constructor(private context: CanvasRenderingContext2D) { }

    public fillStyle(color: string): PixelRenderer {
        this.context.fillStyle = color;
        return this;
    }

    public strokeStyle(color: string): PixelRenderer {
        this.context.strokeStyle = color;
        return this;
    }

    public lineWidth(lineWidth: number): PixelRenderer {
        this.context.lineWidth = UnitConverter.toPixels(lineWidth);
        return this;
    }

    public moveTo(v: Vector2D): PixelRenderer {
        this.context.moveTo(
            UnitConverter.toPixels(v.x),
            UnitConverter.toPixels(v.y),
        );
        return this;
    }

    public lineTo(v: Vector2D): PixelRenderer {
        this.context.lineTo(
            UnitConverter.toPixels(v.x),
            UnitConverter.toPixels(v.y),
        );
        return this;
    }

    public drawLine(v1: Vector2D, v2: Vector2D): PixelRenderer {
        this.context.beginPath();
        this.moveTo(v1);
        this.lineTo(v2);
        this.context.closePath();
        return this;
    }

    public drawCircle(position: Vector2D, radius: number): PixelRenderer {
        this.context.beginPath();
        this.context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
        this.context.closePath();
        return this;
    }
}
