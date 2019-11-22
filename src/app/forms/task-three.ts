import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";
import { drawGrid } from "../layers/grid";
import { round, toDegrees } from "../math/converters";

export class TaskThree {

    constructor(private renderer: PixelRenderer) {
        
    }

    public draw() {

        const polarToCartesian_aX: HTMLInputElement = document.getElementById("polarToCartesian_aX") as HTMLInputElement;
        const polarToCartesian_aY: HTMLInputElement = document.getElementById("polarToCartesian_aY") as HTMLInputElement;
        const polarToCartesian_magnitude: HTMLInputElement = document.getElementById("polarToCartesian_magnitude") as HTMLInputElement;
        const polarToCartesian_angle: HTMLInputElement = document.getElementById("polarToCartesian_angle") as HTMLInputElement;

        const pointA = new Vector2D(polarToCartesian_aX.valueAsNumber, polarToCartesian_aY.valueAsNumber);
        const vektorAB = Vector2D.polarToCartesian(polarToCartesian_magnitude.valueAsNumber, polarToCartesian_angle.valueAsNumber);
        const pointB = Vector2D.add(pointA, vektorAB);

        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.renderer.clearScreen();
        document.getElementById("info-polarToCartesian").innerHTML = "";
        
        drawGrid(context);

        this.renderer.beginPath();
        this.renderer.moveTo(pointA);
        this.renderer.lineTo(pointB);
        this.renderer.stroke();

        this.renderer.fillCircle(pointA, 0.1);
        this.renderer.moveTo(pointA);
        this.renderer.fillCircle(pointB, 0.1);
        this.renderer.stroke();

        if(polarToCartesian_aX.value != "" && polarToCartesian_aY.value != "" && polarToCartesian_magnitude.value != "" && polarToCartesian_angle.value != "") {
        document.getElementById("info-polarToCartesian").innerHTML += "<p>Alpha: " + round(toDegrees(vektorAB.angle())) + "grad | A: " + pointA.x + "," + pointA.y + " | B: " + round(pointB.x) + "," + round(pointB.y) + " | AB: " + round(vektorAB.x) + "," + round(vektorAB.y) + "</p>"
        }
    }

}
