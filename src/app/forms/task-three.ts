import { Vector2D } from "../math/vector";
import { PixelRenderer } from "../rendering/pixel-renderer";
import { drawGrid } from "../layers/grid";
import { round, toDegrees } from "../math/converters";

export class TaskThree {

    constructor(private renderer: PixelRenderer) {
        
    }

    public draw() {
        const infoContainer = document.getElementById("info-polarToCartesian");
        const polarToCartesian_aX: HTMLInputElement = document.getElementById("polarToCartesian_aX") as HTMLInputElement;
        const polarToCartesian_aY: HTMLInputElement = document.getElementById("polarToCartesian_aY") as HTMLInputElement;
        const polarToCartesian_magnitude: HTMLInputElement = document.getElementById("polarToCartesian_magnitude") as HTMLInputElement;
        const polarToCartesian_angle: HTMLInputElement = document.getElementById("polarToCartesian_angle") as HTMLInputElement;

        const angle = Math.asin(polarToCartesian_angle.valueAsNumber);

        const pointA = new Vector2D(polarToCartesian_aX.valueAsNumber, polarToCartesian_aY.valueAsNumber);
        const vektorAB = Vector2D.polarToCartesian(polarToCartesian_magnitude.valueAsNumber, angle);
        const pointB = Vector2D.add(pointA, vektorAB);
        const sides = Vector2D.subtract(pointB, pointA);

        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;

        this.renderer.clearScreen();
        
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

            const x = 5;
            const y = 0;
            const mag = 5;
            const oppositeToHypoRatio = 0.6

            const alpha = Math.asin(0.6);

            infoContainer.innerHTML = `
                <p>
                    Alpha: ${round(toDegrees(angle))} grad<br>
                    Beta: ${round(90 - toDegrees(angle))} grad<br>
                    Gamma: 90 grad<br><br>
                    A:  [${round(pointA.x)}, ${round(pointA.y)}]<br>
                    B:  [${round(pointB.x)}, ${round(pointB.y)}]<br>
                    AB: [${round(vektorAB.x)}, ${round(vektorAB.y)}]<br><br>
                    a: ${round(vektorAB.y)}<br>
                    b: ${round(vektorAB.x)}<br>
                    c: ${round(polarToCartesian_magnitude.valueAsNumber)}
                </p>
            `;  
        }
    }

}
