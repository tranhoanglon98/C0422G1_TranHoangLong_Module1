// tạo class LotteryTicket với 6 constructor là 6 số của một vé
class LotteryTicket {
    constructor(num1, num2, num3, num4, num5, num6) {
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
        this.num4 = num4
        this.num5 = num5
        this.num6 = num6
    }

    getNum(i) {
        switch (i) {
            case 0:
                return this.num1;
                break
            case 1:
                return this.num2;
                break
            case 2:
                return this.num3;
                break
            case 3:
                return this.num4;
                break
            case 4:
                return this.num5;
                break
            case 5:
                return this.num6;
                break
        }
    }

    setNum(i, number) {
        switch (i) {
            case 0:
                this.num1 = number;
                break
            case 1:
                this.num2 = number;
                break
            case 2:
                this.num3 = number;
                break
            case 3:
                this.num4 = number;
                break
            case 4:
                this.num5 = number;
                break
            case 5:
                this.num6 = number;
                break
        }
    }
}

// tạo 1 mảng chứa các phần tử là các vé(obj) người dùng mua
let lottery = []

//hàm mua vé
function buyTicket() {
    //điều kiện chỉ cho mua 4 vé
    if (lottery.length > 3) {
        alert("Bạn chỉ được mua tối đa 4 vé")
        return
    }
    // tạo 1 obj mới(vé) thuôc class LotteryTicket
    let newTicket = new LotteryTicket()
    lottery.push(newTicket)
    // cho người dùng chọn: 1. tự chọn số    2. hệ thống random
    let choose
    do {
        choose = +prompt("Bạn có hai lựa chọn \n 1.Tự chọn sô \n 2.Hệ thống chọn số ngẫu nhiên")
        if (choose !== 1 && choose !== 2) {
            alert("Bạn chỉ được chọn 1 hoặc 2 \n HÃY CHỌN LẠI")
        }
    } while (choose !== 1 && choose !== 2)
    // hiển thị vé ra màn hình tùy theo lựa chọn của người dùng
    let table = "<tr><th style='width: 80px'>Vé " + lottery.length + " </th>"
    if (choose === 1) {
        for (let i = 0; i < 6; i++) {
            newTicket.setNum(i, '&nbsp&nbsp')
            table += "<td><button id='" + lottery.length + "" + i + "' onclick='choose(this.id)'>" + newTicket.getNum(i) + "</button></td>"
            console.log(+lottery.length + "" + i)
        }
    } else {
        for (let i = 0; i < 6; i++) {
            newTicket.setNum(i, Math.floor(Math.random() * 100))
            table += "<td><button>" + newTicket.getNum(i) + "</button></td>"
        }
    }
    table += "<tr>"
    document.getElementById("ticket").innerHTML += table
}

// hàm chọn số khi người dùng chọn choose =1
function choose(id) {
    let index = id.split("")
    let i = parseInt(index[0])
    let j = parseInt(index[1])
    let num
    do {
        num = +prompt("Chọn số từ 0-->99")
        if ((num < 0 || num > 99) || isNaN(num) === true) {
            alert("Bạn chỉ được chọn số từ 0 --> 99 \n HÃY CHỌN LẠI")
        }
    } while ((num < 0 || num > 99) || isNaN(num) === true)
    switch (j) {
        case 0: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
        case 1: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
        case 2: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
        case 3: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
        case 4: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
        case 5: {
            lottery[(i - 1)].setNum(j, num)
            document.getElementById(id).innerText = lottery[(i - 1)].getNum(j)
        }
            break
    }
}
// hàm kiểm tra kết quả
function checkTicket() {
    let result = []
    let table = "<tr><td colspan='7'><hr></td></tr>" + "<tr><th>Kết quả</th>"
    for (let i = 0; i < 6; i++) {
        result[i] = Math.floor(Math.random() * 100)
        table += "<td><button>" + result[i] + "</button></td>"
    }
    table += "</tr>"
    document.getElementById("ticket").innerHTML += table
    for (let i = 0; i < lottery.length; i++) {
        let count = 0
        for (let j = 5; j >= 0; j--) {
            if (result[j] === lottery[i].getNum(j)) {
                count++
            } else break
        }
        switch (count) {
            case 1:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải khuyến khích trị giá: $10.000" + "<br>"
                break
            case 2:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải tư trị giá: $250.000.000" + "<br>"
                break
            case 3:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải ba trị giá: $500.000" + "<br>"
                break
            case 4:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải mhif trị giá: $1.000.000" + "<br>"
                break
            case 5:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải nhất trị giá: $2.000.000" + "<br>"
                break
            case 6:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé, "
                    + (i + 1) + " của bạn đã trúng giải đặc biệt trị giá: $10.000.000" + "<br>"
                break
            default :
                document.getElementById("result").innerHTML += "Vé " + (i + 1)
                    + " của bạn đã toang, Chúc mừng bạn đã mất tiền :D" + "<br>"
        }
    }
    document.getElementById("result").innerHTML += "<button onclick='playAgain()'>Mua lại</button>"
}
// hàm xuống xác chơi lại lần khác :d
function playAgain() {
    document.getElementById("ticket").innerText = ''
    document.getElementById("result").innerText = ''
    lottery = []
}

