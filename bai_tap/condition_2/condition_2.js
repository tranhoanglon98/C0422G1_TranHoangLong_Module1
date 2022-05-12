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
function age() {
    let age = document.getElementById("intnum").value;
    console.log(age);
    if(age > 0 && age < 120){
        document.getElementById("result7").innerText = "Kết quả: " + age + " là tuổi của một người."
    }
    else {
        document.getElementById("result7").innerText = "Kết quả: " + age + " không phải là tuổi của một người."
    }
}
function checktriangle() {
    let a3 = document.getElementById("a3").value;
    let b3 = document.getElementById("b3").value;
    let c3 = document.getElementById("c3").value;
    if(a3 > 0 && b3 > 0 && c3 > 0 && a3+b3>c3 && a3+c3>b3 && b3+c3>a3){
        document.getElementById("result8").innerText = "Kết quả: ba số trên là ba cạnh của một tam giác";
    }
    else {
        document.getElementById("result8").innerText = "Kết quả: ba số trên không phải là ba cạnh của một tam giác";
    }
}
function pay() {
    let kwh = document.getElementById("kwh").value;
    let pay;
    if(kwh < 100){
        pay = 2000 * kwh;
        document.getElementById("result9").innerText = "Kết quả: " + pay + " Đ";
    }
    else{
        if(kwh < 300){
            pay = 2500 * kwh;
            document.getElementById("result9").innerText = "Kết quả: " + pay + " Đ";
        }
        else {
            pay = 3000 * kwh;
            document.getElementById("result9").innerText = "Kết quả: " + pay + " Đ";
        }
    }

}
function tax() {
    let salary = document.getElementById("salary").value;
    let tax;
    if(salary < 10000000){
        tax = 0;
        document.getElementById("result10").innerText = "Kết quả: " + tax + "Đ";
    }
    else {
        tax = salary * 0.1;
        document.getElementById("result10").innerText = "Kết quả: " + tax + "Đ";
    }
}
function interest() {
    let debt = parseInt(document.getElementById("loan").value);
    let month = document.getElementById("month").value;
    let interestRate = (document.getElementById("interestRate").value)/100;
    let i = 1;
    while (i <= month){
        i += 1;
        debt = debt + debt * interestRate;
    }
    document.getElementById("result11").innerText = "Kết quả: số tiền phải trả sau " + month + " tháng là " + debt + "Đ";
}