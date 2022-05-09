function average() {
    let physics = document.getElementById("phs").value;
    let chemystry = document.getElementById("chm").value;
    let byology = document.getElementById("byo").value;
    let sum = parseInt(physics) + parseInt(chemystry) + parseInt(byology);
    let avg = sum / 3;
    alert("Điểm trung bình là:" + avg);
}
function summ() {
    let physics = document.getElementById("phs").value;
    let chemystry = document.getElementById("chm").value;
    let byology = document.getElementById("byo").value;
    let sum = parseInt(physics) + parseInt(chemystry) + parseInt(byology);
    alert("Tổng điểm:" + sum);

}
function convert() {
    let celsius = document.getElementById("C").value;
    let Fahrenheit = parseInt(celsius * 9 / 5 +32);
    alert(Fahrenheit + " độ F");
}
function circlearea() {
    let R = document.getElementById("r").value;
    let area = 3.14 * R * R;
    alert("diện tích hình tròn là: " + area);
}
function perimeter() {
    let R = document.getElementById("r").value;
    let perimeter = 2 * 3.14 * R;
    alert("Chu vi hình tròn là: " + perimeter);
}