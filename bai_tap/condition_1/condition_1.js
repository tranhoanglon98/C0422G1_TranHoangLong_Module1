function check() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    if(num1 % num2 == 0){
        document.getElementById("result1").innerText = "Kết quả: " + num1 + " chia hết cho " + num2;
    }
    else {
        document.getElementById("result1").innerText = "Kết quả: " + num1 + " không chia hết cho " + num2;
    }
}
function agecheck() {
    let age = document.getElementById("age").value;
    if(age >= 15){
        document.getElementById("result2").innerText = "Kết quả: Bạn đủ điều kiện vào học lớp 10."
    }
    else {
        document.getElementById("result2").innerText = "Kết quả: Bạn không đủ điều kiện vào học lớp 10."
    }
}function integer() {
    let intNumber = document.getElementById("int").value;
    if (intNumber > 0){
        document.getElementById("result3").innerText = "Kết quả: " + intNumber + " lớn hơn 0";
    }
    if (intNumber < 0){
        document.getElementById("result3").innerText = "Kết quả: " + intNumber + " nhỏ hơn 0";
    }
}
function findmax() {
    let firstNum = document.getElementById("firstnum").value;
    let secondNum = document.getElementById("secondtnum").value;
    let thirdNum = document.getElementById("thirdnum").value;
    let max = firstNum;
    console.log(a)
    if(secondnum > max){
        max = secondNum;
    }
    if(thirdnum > max){
        max = thirdNum;
    }
    document.getElementById("result4").innerText = "Kết quả: Giá trị lớn nhất là: " + max;
}
function pointcheck() {
    let testPoint = document.getElementById("testpoint").value;
    let midPoint = document.getElementById("midtermspoint").value;
    let endPoint = document.getElementById("endtermspoint").value;
    let avg = testPoint * 0.2 + midPoint * 0.3 + endPoint * 0.5;
    if (avg < 4){
        document.getElementById("result5").innerText = "Kết quả: học lực yếu";
    }
    else {
        if(avg < 6.5){
            document.getElementById("result5").innerText = "Kết quả: học lực trung bình";
        }
        else {
            if(avg < 8){
                document.getElementById("result5").innerText = "Kết quả: học lực khá";
            }
            else {
                document.getElementById("result5").innerText = "Kết quả: học lực giỏi";
            }
        }
    }

}