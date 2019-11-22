import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";
import { toDegrees, round } from "../math/converters";
import { drawGrid } from "../layers/grid";

export class TaskTwo {

    constructor(private renderer: PixelRenderer) {
        
    }

    public draw() {

        const getMagAng_abX: HTMLInputElement = document.getElementById("getMagAng_abX") as HTMLInputElement;
        const getMagAng_abY: HTMLInputElement = document.getElementById("getMagAng_abY") as HTMLInputElement;

        const pointA = new Vector2D(0,0)
        const vektorAB = new Vector2D(getMagAng_abX.valueAsNumber, getMagAng_abY.valueAsNumber);
        const pointB = Vector2D.add(pointA, vektorAB);

        const angle = toDegrees(vektorAB.angle());
        const magnitude = vektorAB.magnitude();

        
        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.renderer.clearScreen();
        document.getElementById("info-getMagAng").innerHTML = "";
        
        drawGrid(context);

        this.renderer.beginPath();
        this.renderer.moveTo(pointA);
        this.renderer.lineTo(pointB);
        this.renderer.stroke();

        this.renderer.fillCircle(pointA, 0.1);
        this.renderer.moveTo(pointA);
        this.renderer.fillCircle(pointB, 0.1);
        this.renderer.stroke();

        if(getMagAng_abX.value != "" && getMagAng_abY.value != "") {
        document.getElementById("info-getMagAng").innerHTML += "<p>Steigungswinkel: " + round(angle) + " grad | Betrag: " + round(magnitude) + "</p>"
        }
    }

}