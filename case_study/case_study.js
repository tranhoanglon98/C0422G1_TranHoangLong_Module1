function draw() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let result = ""
    for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= width; j++) {
            if(i == 1|| i==height || j==1 || j == width){
                result +="*"
            }
            else {
              result +="&nbsp&nbsp"
            }
        }result += "<br>"
    }
    document.getElementById("result1").innerHTML = result
}
function drawTriangle() {
    let result = ""
    let height = document.getElementById("triangle").value;
    for (let i =1 ; i <= height; i++) {
        for(let j = 1;j<=height;j++){
            if(i==height || j ==1 || j ==i){
                result += "*"
            }else {
                result += "&nbsp&nbsp"
            }
        }
        result += "<br>"
    }
document.getElementById("result2").innerHTML = result
}