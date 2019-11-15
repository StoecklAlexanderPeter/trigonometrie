var submitGetB = document.getElementById("submitGetB"),
    getB_aX = document.getElementById("getB_aX"),
    getB_aY = document.getElementById("getB_aY");

if(submitGetB) {
    submitGetB.addEventListener("click",  console.log(getB(getB_aX.textContent,getB_aY.textContent,2,2)));
} else {
    console.log("ass")
}
function getB(aX, aY, abX, abY) {
    return "" + (aX + abX) + ", " + (aY + abY);
}