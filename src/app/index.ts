const submit: HTMLElement = document.getElementById("submit") as HTMLElement;

const getB_aX: HTMLInputElement = document.getElementById("getB_aX") as HTMLInputElement;
const getB_aY: HTMLInputElement = document.getElementById("getB_aY") as HTMLInputElement;
const getB_abX: HTMLInputElement = document.getElementById("getB_abX") as HTMLInputElement;
const getB_abY: HTMLInputElement = document.getElementById("getB_abY") as HTMLInputElement;

const GAPSIZE = 50;

const ctx: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context = ctx.getContext("2d") as CanvasRenderingContext2D;

drawBoard();

submit.addEventListener("click", () => {
    context.clearRect(0, 0, ctx.width, ctx.height);
    drawBoard();
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
    vector.a.x = (aX * GAPSIZE);
    vector.a.y = ctx.height - (aY * GAPSIZE);
    vector.b.x = (bX * GAPSIZE);
    vector.b.y = ctx.height - (bY * GAPSIZE);
    vector.ab.x = abX;
    vector.ab.y = abY;

    return vector;
}

function drawCoordinates() {
    const coordinates = getB(
        getB_aX.valueAsNumber,
        getB_aY.valueAsNumber,
        getB_abX.valueAsNumber,
        getB_abY.valueAsNumber,
    );
    //console.log(coordinates);
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
    for (let x = 0; x <= ctx.width; x += GAPSIZE) {
        if (x === ctx.width / 2) {
            context.strokeStyle = "#ff0000";
        } else {
            context.strokeStyle = "#000000";
        }
        context.moveTo(x, 0);
        context.lineTo(x, ctx.height);
    }

    for (let y = 0; y <= ctx.height; y += GAPSIZE) {
        context.moveTo(0, y);
        context.lineTo(ctx.width, y);
    }

    context.strokeStyle = "black";
    context.stroke();
}
