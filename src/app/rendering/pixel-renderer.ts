import { Config } from "../config";
import { Vector2D } from "../math/vector";
import { UnitConverter } from "./unit-converter";

export class PixelRenderer {
    private config = Config.getInstance();

    constructor(private context: CanvasRenderingContext2D) { }

    public beginPath(): PixelRenderer {
        this.context.beginPath();
        return this;
    }

    public stroke(): PixelRenderer {
        this.context.stroke();
        return this;
    }

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
        this.context.stroke();
        return this;
    }

    public drawCircle(position: Vector2D, radius: number): PixelRenderer {
        this.context.arc(
            UnitConverter.toPixels(position.x),
            UnitConverter.toPixels(position.y),
            UnitConverter.toPixels(radius),
            0,
            2 * Math.PI,
        );
        return this;
    }

    /*
    public drawAngle(position: Vector2D, radius: number, angle: number): PixelRenderer {
        this.context.beginPath();
        this.context.arc(
            UnitConverter.toPixels(position.x),
            UnitConverter.toPixels(position.y),
            UnitConverter.toPixels(radius),
            0,
            angle,
            false
        );
        this.context.stroke();
        return this;
    }
    */

    public fillCircle(position: Vector2D, radius: number): PixelRenderer {
        this.context.beginPath();
        this.drawCircle(position, radius);
        this.context.fill();
        return this;
    }

    public strokeCircle(position: Vector2D, radius: number): PixelRenderer {
        this.context.beginPath();
        this.drawCircle(position, radius);
        this.context.stroke();
        return this;
    }

    public activateMathCoordinates() {
        this.context.transform(
            1,
            0,
            0,
            -1,
            this.context.canvas.width / 2,
            this.context.canvas.height / 2,
        );
    }

    public clearScreen() {
        this.context.clearRect(
            -this.context.canvas.width / 2,
            -this.context.canvas.height / 2,
            this.context.canvas.width,
            this.context.canvas.height,
        );
    }

    public toCoordinates(x: number, y: number): Vector2D {
        return new Vector2D(
            UnitConverter.toUnits(x - this.context.canvas.width / 2),
            UnitConverter.toUnits(y * -1 + this.context.canvas.height / 2),
        );
    }
}
