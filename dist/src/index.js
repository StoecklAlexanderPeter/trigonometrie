"use strict";
var submit = document.getElementById("submit");
var getB_aX = document.getElementById("getB_aX");
var getB_aY = document.getElementById("getB_aY");
var getB_abX = document.getElementById("getB_abX");
var getB_abY = document.getElementById("getB_abY");
var ctx = document.getElementById("coordinate_system");
var context = ctx.getContext("2d");
drawBoard();
submit.addEventListener("click", function () {
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
    // Fill Array
    vector.a.x = (aX * 50);
    vector.a.y = ctx.height - (aY * 50);
    vector.b.x = (bX * 50);
    vector.b.y = ctx.height - (bY * 50);
    return vector;
}
function drawCoordinates() {
    var coordinates = getB(getB_aX.valueAsNumber, getB_aY.valueAsNumber, getB_abX.valueAsNumber, getB_abY.valueAsNumber);
    // context.clearRect(0, 0, ctx.width, ctx.height);
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
    var p = 0;
    for (var x = 0; x <= ctx.width; x += 50) {
        context.moveTo(x, 0);
        context.lineTo(x, ctx.height);
    }
    for (var y = 0; y <= ctx.height; y += 50) {
        context.moveTo(0, y);
        context.lineTo(ctx.width, y);
    }
    context.strokeStyle = "black";
    context.stroke();
}
//# sourceMappingURL=index.js.map