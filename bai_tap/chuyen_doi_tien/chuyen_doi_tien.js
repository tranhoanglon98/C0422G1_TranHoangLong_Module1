function convert() {
    let amount = document.getElementById("AM").value;
    let TO = document.getElementById("to").value;
    let FROM = document.getElementById("from").value;
    if(TO == "VND"){
        if(FROM == "USD"){
            let RSVND = parseInt(amount) * 23000;
            document.getElementById("Result").innerText = "Result: " + RSVND + "Đ";
        }
        else {
            document.getElementById("Result").innerText = "Result: " + amount + "Đ";
        }
    }
    else {
        if(FROM == "VND"){
            let RSUSD = parseInt(amount) / 23000;
            document.getElementById("Result").innerText = "Result: " + RSUSD + "USD";
        }
        else {
            document.getElementById("Result").innerText = "Result: " + amount + "USD";
        }
    }
}
