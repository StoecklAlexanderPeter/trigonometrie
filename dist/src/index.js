"use strict";
var submit = document.getElementById("submit");
var getB_aX = document.getElementById("getB_aX");
var getB_aY = document.getElementById("getB_aY");
var getB_abX = document.getElementById("getB_abX");
var getB_abY = document.getElementById("getB_abY");
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
    var coordinates = getB(getB_aX.valueAsNumber, getB_aY.valueAsNumber, getB_abX.valueAsNumber, getB_abY.valueAsNumber);
    var pointSize = 3;
    var ctx = document.getElementById("coordinate_system");
    var context = ctx.getContext("2d");
    // context.clearRect(0, 0, ctx.width, ctx.height);
    context.strokeRect(coordinates.a.x, coordinates.a.y, 2, 2);
    context.strokeRect(coordinates.b.x, coordinates.b.y, 2, 2);
    context.beginPath();
    context.moveTo(coordinates.a.x, coordinates.a.y);
    context.lineTo(coordinates.b.x, coordinates.b.y);
    context.stroke();
}
//# sourceMappingURL=index.js.map