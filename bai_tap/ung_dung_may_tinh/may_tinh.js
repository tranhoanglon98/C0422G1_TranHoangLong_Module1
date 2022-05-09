function addition() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let rs = parseInt(a) + parseInt(b);
    document.getElementById("result").innerText = rs;
}
function subtraction() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let rs = parseInt(a) - parseInt(b);
    document.getElementById("result").innerText = rs;
}
function multiplication() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let rs = parseInt(a) * parseInt(b);
    document.getElementById("result").innerText = rs;
}
function division() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let rs = parseInt(a) / parseInt(b);
    document.getElementById("result").innerText = rs;
}