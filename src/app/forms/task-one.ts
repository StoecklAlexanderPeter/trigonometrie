import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";
import { drawGrid } from "../layers/grid";

export class TaskOne {

    constructor(private renderer: PixelRenderer) {
        
    }

    public draw() {

        const getB_aX: HTMLInputElement = document.getElementById("getB_aX") as HTMLInputElement;
        const getB_aY: HTMLInputElement = document.getElementById("getB_aY") as HTMLInputElement;
        const getB_abX: HTMLInputElement = document.getElementById("getB_abX") as HTMLInputElement;
        const getB_abY: HTMLInputElement = document.getElementById("getB_abY") as HTMLInputElement;

        const pointA = new Vector2D(getB_aX.valueAsNumber, getB_aY.valueAsNumber);
        const vektorAB = new Vector2D(getB_abX.valueAsNumber, getB_abY.valueAsNumber);
        const pointB = Vector2D.add(pointA, vektorAB);

        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.renderer.clearScreen();
        document.getElementById("info-getB").innerHTML = "";
        
        drawGrid(context);

        this.renderer.beginPath();
        this.renderer.moveTo(pointA);
        this.renderer.lineTo(pointB);
        this.renderer.stroke();

        this.renderer.fillCircle(pointA, 0.1);
        this.renderer.moveTo(pointA);
        this.renderer.fillCircle(pointB, 0.1);
        this.renderer.stroke();

        if(getB_aX.value != "" && getB_aY.value != "" && getB_abX.value != "" && getB_abY.value != "") {
        document.getElementById("info-getB").innerHTML += "<p>A: " + pointA.x +"," + pointA.y + " | B: " + pointB.x + "," + pointB.y + " | AB: " + vektorAB.x + "," + vektorAB.y + "</p>"
        }
    }

}