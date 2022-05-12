function convert() {
    let degreesValue = document.getElementById("value").value;
    let degreeUnit = document.getElementById("unitdegrees").value;
    let convert;
    if(degreeUnit == "Độ C"){
        convert = degreesValue * 9 /5 +32;
        console.log(convert);
        document.getElementById("result1").innerText = "Kết quả: tương đương " + convert + " độ F";
    }
    else {
        convert = (degreesValue -32)*5/9;
        document.getElementById("result1").innerText = "Kết quả: tương đương " + convert + " độ C";
    }
}
function convertlength() {
    let lengthValue = document.getElementById("length").value;
    let lengthUnit = document.getElementById("lengthunit").value;
    let convert;
    if(lengthUnit == "Feet"){
        convert = lengthValue * 3.2808;
        document.getElementById("result2").innerText = "Kết quả: tương đương " + convert + " meter";
    }
    else {
        convert = lengthValue / 3.2808;
        document.getElementById("result2").innerText = "Kết quả: tương đương " + convert + " feet";
    }
}
function calArea() {
    let squareWidth = document.getElementById("width").value;
    let area = squareWidth * squareWidth;
    document.getElementById("result3").innerText = "Kết quả: diện tích hình vuông là: " + area;
}
function solve1() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let x = -b / a;
    document.getElementById("result4").innerText = "Kết quả: x = " + x;
}
function solve2() {
    let a2 = document.getElementById("a2").value;
    let b2 = document.getElementById("b2").value;
    let c2 = document.getElementById("c2").value;
    let delta = b2*b2 - 4*a2*c2;
    let x1;
    let x2;
    console.log(delta);
    if(delta < 0){
        document.getElementById("result5").innerText = "Kết quả: Phương trình vô nghiệm";
    }
    else {
        if(delta == 0){
            x1 = -b2/2/a2;
            document.getElementById("result5").innerText = "Kết quả: Phương trình có nghiệm kép x1 = x2 = " + x1 ;
        }
        else {
            x1 = (-b2 + Math.sqrt(delta))/2/a2;
            x2 = (-b2 - Math.sqrt(delta))/2/a2;
            document.getElementById("result5").innerText = "Kết quả: x1 = " + x1 + ", x2 = " + x2;
        }
    }
}
function triangleArea() {
    let widthtriangle = document.getElementById("widthtriangle").value;
    let heighttriangle = document.getElementById("heighttriangle").value;
    let trianglearea = 0.5*widthtriangle*heighttriangle;
    document.getElementById("result6").innerText = "Kết quả: diện tích tam giác là " + trianglearea;
}