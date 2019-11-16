"use strict";
var submit = document.getElementById("submit");
var getB_aX = document.getElementById("getB_aX");
var getB_aY = document.getElementById("getB_aY");
var getB_abX = document.getElementById("getB_abX");
var getB_abY = document.getElementById("getB_abY");
var GAPSIZE = 50;
var ctx = document.getElementById("coordinate_system");
var context = ctx.getContext("2d");
drawBoard();
submit.addEventListener("click", function () {
    context.clearRect(0, 0, ctx.width, ctx.height);
    drawBoard();
    drawCoordinates();
});
function getB(aX, aY, abX, abY) {
    // Get B point
    var bX = (aX + abX);
    var bY = (aY + abY);
    // Create Vektor Array
    var vector = {};
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
    var coordinates = getB(getB_aX.valueAsNumber, getB_aY.valueAsNumber, getB_abX.valueAsNumber, getB_abY.valueAsNumber);
    //console.log(coordinates);
    context.strokeStyle = "#0066ff";
    context.lineWidth = 2;
    context.strokeRect(coordinates.a.x, coordinates.a.y, 1, 1);
    context.strokeRect(coordinates.b.x, coordinates.b.y, 1, 1);
    context.beginPath();
    context.moveTo(coordinates.a.x, coordinates.a.y);
    context.lineTo(coordinates.b.x, coordinates.b.y);
    context.stroke();
}
function drawBoard() {
    for (var x = 0; x <= ctx.width; x += GAPSIZE) {
        if (x === ctx.width / 2) {
            context.strokeStyle = "#ff0000";
        }
        else {
            context.strokeStyle = "#000000";
        }
        context.moveTo(x, 0);
        context.lineTo(x, ctx.height);
    }
    for (var y = 0; y <= ctx.height; y += GAPSIZE) {
        context.moveTo(0, y);
        context.lineTo(ctx.width, y);
    }
    context.strokeStyle = "black";
    context.stroke();
}
//# sourceMappingURL=index.js.map