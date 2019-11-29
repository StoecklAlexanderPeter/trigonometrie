export class  Vector2D {
    public static add(v1: Vector2D, v2: Vector2D): Vector2D {
        return new Vector2D(v1.x + v2.x, v1.y + v2.y);
    }

    public static subtract(v1: Vector2D, v2: Vector2D): Vector2D {
        return new Vector2D(v1.x - v2.x, v1.y - v1.y);
    }

    /**
     * Creates a cartesian vector (aka a Vector2D class) from a polar vector.
     *
     * @param magnitude length of the vector
     * @param angle the direction in radians
     */
    public static polarToCartesian(magnitude: number, angle: number): Vector2D {
        const x = magnitude * Math.cos(angle);
        const y = magnitude * Math.sin(angle);
        return new Vector2D(x, y);
    }

    // Instance methods
    // --------------------------------------------------------------------------------------
    constructor(public x: number, public y: number) { }

    public add(v: Vector2D): void {
        this.x += v.x;
        this.y += v.y;
    }

    public magnitude(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    /**
     * Returns the angle in radians.
     */
    public angle(): number {
        return Math.atan(this.y / this.x);
    }

    public set(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
}
