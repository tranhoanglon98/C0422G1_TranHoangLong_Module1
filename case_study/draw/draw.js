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

// Vẽ tam giácdư
function drawTriangle() {
    let result = ""
    let height = document.getElementById("triangle").value;
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
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




