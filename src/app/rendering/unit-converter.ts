import { Vector2D } from "../math/vector";

export class UnitConverter {
    public static toPixels(units: number): number {
        return units * this.UNIT_SIZE;
    }

    public static toUnits(pixels: number): number {
        return pixels / this.UNIT_SIZE;
    }

    public static setUnitSize(unitSize: number): void {
        this.UNIT_SIZE = unitSize;
    }

    private static UNIT_SIZE = 1;
}
