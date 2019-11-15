const submit: HTMLElement = document.getElementById("submit") as HTMLElement;

const getB_aX: HTMLInputElement = document.getElementById("getB_aX") as HTMLInputElement;
const getB_aY: HTMLInputElement = document.getElementById("getB_aY") as HTMLInputElement;
const getB_abX: HTMLInputElement = document.getElementById("getB_abX") as HTMLInputElement;
const getB_abY: HTMLInputElement = document.getElementById("getB_abY") as HTMLInputElement;

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
    vector.a.x = aX;
    vector.a.y = aY;
    vector.b.x = bX;
    vector.b.y = bY;
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

    const pointSize = 3;
    const ctx: HTMLCanvasElement = document.getElementById("coordinate_system") as HTMLCanvasElement;
    const context = ctx.getContext("2d") as CanvasRenderingContext2D;
    // context.clearRect(0, 0, ctx.width, ctx.height);

    context.strokeRect(coordinates.a.x, coordinates.a.y, 2, 2);
    context.strokeRect(coordinates.b.x, coordinates.b.y, 2, 2);
    context.beginPath();
    context.moveTo(coordinates.a.x, coordinates.a.y);
    context.lineTo(coordinates.b.x, coordinates.b.y);
    context.stroke();
}