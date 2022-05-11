function days() {
    let Month = parseInt(document.getElementById("month").value);
    switch (Month) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            document.getElementById("result").innerText = "Tháng này có 31 ngày";break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            document.getElementById("result").innerText = "Tháng này có 30 ngày";break;
        case 2 : {
                 let year = +prompt("Nhập năm:");
                if (year % 4 == 0) {
                    if (year % 100 == 0) {
                        if (year % 400 == 0) {
                            year = true
                        } else {
                            year = false
                        }
                    } else {
                        year = true
                    }
                }
                else { year = false };
            switch (year) {
                case true : document.getElementById("result").innerText = "Tháng này có 29 ngày";break;
                case false : document.getElementById("result").innerText = "Tháng này có 28 ngày";break;
            }
            }
        }
    }