import { Config } from "./config";
import { drawGrid } from "./layers/grid";
import { Vector2D } from "./math/vector";
import { Timer } from "./rendering/loop";
import { PixelRenderer } from "./rendering/pixel-renderer";
import { UnitConverter } from "./rendering/unit-converter";
import { Form } from "./forms/form";
import { toDegrees, round } from "./math/converters";

const config = Config.getInstance();
const timer = new Timer();
let canvas: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let renderer: PixelRenderer;
let form: Form;
let mousePosition = new Vector2D(0, 0);

const clickedPositions: Vector2D[] = [];

window.addEventListener("mousemove", (event) => {
    mousePosition = renderer.toCoordinates(event.clientX, event.clientY);
});

window.addEventListener("click", (event) => {
    clickedPositions.push(
        renderer.toCoordinates(event.clientX, event.clientY)
    );
});

function main() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    context = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    UnitConverter.setUnitSize(window.innerWidth / config.size.width);

    renderer = new PixelRenderer(context);
    form = new Form();

    form.changeForm();


    renderer.activateMathCoordinates();

    timer.update = (deltaTime: number) => {
        renderer.clearScreen();

        drawGrid(context);

        renderer.fillStyle("red");
        for (const position of clickedPositions) {
            renderer.fillCircle(position, 0.2);
        }

        renderer.fillStyle("#0066ff80");
        // renderer.strokeStyle("#0066ff");
        // renderer.lineWidth(0.06);
        // renderer.fillCircle(new Vector2D(3, 4), 0.1);
        // renderer.drawLine(new Vector2D(1, 1), new Vector2D(3, 4));
        renderer.fillCircle(mousePosition, 0.2);
    };

    timer.play();
}
main();
taskOne();
taskTwo();
taskThree();

function taskOne() {
    const pointA = new Vector2D(4, 2);
    const vektorAB = new Vector2D(2, 2);
    const pointB = Vector2D.add(pointA, vektorAB);

    console.log("A: " + pointA.x + "," + pointA.y + " | B: " + pointB.x + "," + pointB.y + " | AB: " + vektorAB.x + "," + vektorAB.y);
}

function taskTwo() {
    const vektorA = new Vector2D(4, 3);
    const angle = toDegrees(vektorA.angle());
    const magnitude = vektorA.magnitude();

    console.log("Steigungswinkel: " + angle + " grad | Betrag: " + magnitude);
}

function taskThree() {
    const pointA = new Vector2D(5, 0);
    const vektorAB = Vector2D.polarToCartesian(5, 0.6);
    const pointB = Vector2D.add(pointA, vektorAB);
    
    console.log("alpha: " + round(toDegrees(vektorAB.angle())) + " | A: " + pointA.x + "," + pointA.y + " | B: " + round(pointB.x) + "," + round(pointB.y) + " | AB: " + round(vektorAB.x) + "," + round(vektorAB.y));
}
