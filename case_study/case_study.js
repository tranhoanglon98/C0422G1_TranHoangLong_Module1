// Vẽ hình chữ nhật
function drawRectangle() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let result = ""
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
            if (i == 1 || i == height || j == 1 || j == width) {
                result += "*"
            } else {
                result += "&nbsp&nbsp"
            }
        }
        result += "<br>"
    }
    document.getElementById("result1").innerHTML = result
}
// Vẽ tam giác
function drawTriangle() {
    let result = ""
    let height = document.getElementById("triangle").value;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= height; j++) {
            if (i == height || j == 1 || j == i) {
                result += "*"
            } else {
                result += "&nbsp&nbsp"
            }
        }
        result += "<br>"
    }
    document.getElementById("result2").innerHTML = result
}
//Vẽ tam giác cân đặc
function drawIsoscelesTriangle() {
    let result = ""
    let height = parseInt(document.getElementById("isoscelesTriangle").value)
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j < 2 * height; j++) {
            if ((j > height - i) && (j < height + i)) {
                result += "*"
            } else {
                result += "&nbsp&nbsp"
            }
        }
        result += "<br>"
    }
    document.getElementById("result3").innerHTML = result
}
//Vẽ tam giác cân rỗng
function drawIsoscelesTriangle2() {
    let result = ""
    let height = parseInt(document.getElementById("isoscelesTriangle2").value)
    for (let i = 0; i < height; i++) {
        for (let j = 1; j < 2 * height; j++) {
            if ((j == height - i) || (j == height + i) || i == (height - 1)) {
                result += "*"
            } else {
                result += "&nbsp&nbsp"
            }
        }
        result += "<br>"
    }
    document.getElementById("result4").innerHTML = result
}
// Tính lương
function salaryCalculation() {
    let salary = parseInt(document.getElementById("salary").value)
    if (salary < 7000000) {
        document.getElementById("tax").innerText = "Thuế thu nhập cá nhân: " + salary * 0.05 + "Đ"
        document.getElementById("netSalary").innerText = "Lương ròng: " + (salary - salary * 0.05 + "Đ")
    } else if (salary < 15000000) {
        document.getElementById("tax").innerText = "Thuế thu nhập cá nhân: " + salary * 0.1 + "Đ"
        document.getElementById("netSalary").innerText = "Lương ròng: " + (salary - salary * 0.1 + "Đ")
    } else {
        document.getElementById("tax").innerText = "Thuế thu nhập cá nhân: " + salary * 0.2 + "Đ"
        document.getElementById("netSalary").innerText = "Lương ròng: " + (salary - salary * 0.2 + "Đ")
    }

}
// Kiểm tra nguyên âm
function vowelCheck() {
    let character = document.getElementById("textInput").value
    switch (character) {
        case "u" :
        case "e" :
        case "o" :
        case "a" :
        case "i" :
        case "U" :
        case "E" :
        case "O" :
        case "A" :
        case "I" :
            document.getElementById("result5").innerText = "Ký tự bạn nhập vào là nguyên âm trong tiếng anh!!";
            break
        default :
            document.getElementById("result5").innerText = "Ký tự bạn nhập không phải là nguyên âm trong tiêng anh"
    }
}

//Xây dựng mảng b là prefix sums của mảng a
let arrA = []

function submitLength(x) {
    arrA.length = parseInt(document.getElementById(x).value)
    let table = "<tr>"
    for (let i = 0; i < arrA.length; i++) {
        table += "<td>" + "<input type='text' style='width: 15px' id='"+i+"'>" + "</td>"
    }
    table += "<td><button type='submit' onclick='addValue()'>Nhập</button></td>" +
        "<td><button type='button' onclick='displayArrB()'>Tìm mảng b</button></td></tr>"
    document.getElementById("tableTask1").innerHTML = table
}

function addValue() {
    for (let i = 0; i < arrA.length; i++) {
        arrA[i] = parseInt(document.getElementById(i).value)
    }
    alert("Bạn đã nhập xong mảng")
}
function displayArrB() {
    let arrB = []
    let c = 0
    for (let i =0;i<arrA.length;i++){
        c += arrA[i]
        arrB[i] = c
    }
    document.getElementById("arrB").innerText = "Array b = [" + arrB + "]"
}