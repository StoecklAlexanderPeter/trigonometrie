const submit: HTMLElement = document.getElementById("submit") as HTMLElement;

const getB_aX: HTMLInputElement = document.getElementById("getB_aX") as HTMLInputElement;
const getB_aY: HTMLInputElement = document.getElementById("getB_aY") as HTMLInputElement;
const getB_abX: HTMLInputElement = document.getElementById("getB_abX") as HTMLInputElement;
const getB_abY: HTMLInputElement = document.getElementById("getB_abY") as HTMLInputElement;

const ctx: HTMLCanvasElement = document.getElementById("coordinate_system") as HTMLCanvasElement;
const context = ctx.getContext("2d") as CanvasRenderingContext2D;

drawBoard();

submit.addEventListener("click", function() {
    drawCoordinates();
});

function getB(aX: number, aY: number, abX: number, abY: number) {
    // Get B point
    const bX: number = (aX + abX);
    const bY: number = (aY + abY);

    // Create Vektor Array
    const vector: any = {};
    vector.a = {};
    vector.b = {};
    vector.ab = {};

    // Fill Array
    vector.a.x = aX * 50;
    vector.a.y = aY * 50;
    vector.b.x = bX * 50;
    vector.b.y = bY * 50;
    vector.ab.x = abX * 50;
    vector.ab.y = abY * 50;

    return vector;
}

function drawCoordinates() {
    const coordinates = getB(
        getB_aX.valueAsNumber,
        getB_aY.valueAsNumber,
        getB_abX.valueAsNumber,
        getB_abY.valueAsNumber,
    );
    // context.clearRect(0, 0, ctx.width, ctx.height);
    context.strokeStyle = "#0066ff";
    context.lineWidth = 2;

    context.strokeRect(coordinates.a.x , coordinates.a.y, 1, 1);
    context.strokeRect(coordinates.b.x, coordinates.b.y, 1, 1);
    context.beginPath();
    context.moveTo(coordinates.a.x, coordinates.a.y);
    context.lineTo(coordinates.b.x, coordinates.b.y);
    context.stroke();
}

function drawBoard() {

    const p = 0;

    for (let x = 0; x <= ctx.width; x += 50) {
        context.moveTo(x, 0);
        context.lineTo(x, ctx.height);
    }

    for (let y = 0; y <= ctx.height; y += 50) {
        context.moveTo(0, y);
        context.lineTo(ctx.width, y);
    }

    context.strokeStyle = "black";
    context.stroke();
}
