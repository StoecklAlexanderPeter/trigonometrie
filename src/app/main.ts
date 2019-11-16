import { Config } from "./config";
import { drawGrid } from "./layers/grid";
import { UnitConverter } from "./rendering/unit-converter";

let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

function main() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    context = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    UnitConverter.setUnitSize(window.innerWidth / Config.size.width);

    drawGrid(context);
}
main();
