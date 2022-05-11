let ballimg = null;

function imgojb() {
    ballimg = document.getElementById("ball");
    ballimg.style.position = "relative";
    ballimg.style.left = "0px";
}function moveright() {
    ballimg.style.left = parseInt(ballimg.style.left) + 50 + "px";
    console.log(ballimg.style.left);
}
window.onload = imgojb();