import { Vector2D } from "./math/vector";

export class Config {
    public static getInstance(): Config {
        if (!this.instance) {
            this.instance = new Config();
        }
        return this.instance;
    }

    private static instance: Config;

    public size = {
        height: 40,
        width: 40,
    };

    private constructor() {}
};
