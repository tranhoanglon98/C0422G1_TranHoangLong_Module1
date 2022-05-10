function check() {
    let year =parseInt(document.getElementById("yearcheck").value);
    if(year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 != 0){
                alert("Năm " + year + " không phải là năm nhuận.");
            }
        }
        alert("Năm " + year + " là năm nhuận");
    }
    else  alert("Năm " + year + " không phải là năm nhuận.");
}