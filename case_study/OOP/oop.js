// tạo class LotteryTicket với một thuộc tính là number với number là một mảng số nguyên gồm 6 phần tử
class LotteryTicket {
    constructor(number) {
        this.number = number
    }

    getNumber() {
        return this.number
    }

    setNumber(number) {
        this.number = number
    }
}


// tạo 1 mảng chứa các phần tử là 1 tấm vé(object thuộc class LotteryTicket)
let lotteryTickets = []


// hàm mua vé, chạy khi người dùng click vào button mua vé
function buyLotteryTicket() {
    // điều kiện người dùng chỉ được mua 4 vé
    if (lotteryTickets.length > 3) {
        alert("Bạn chỉ mua được tối đa 4 vé")
        return
    }
    // tạo object mới là một vé và push vào mảng lottery
    let newLotteryTicket = new LotteryTicket()
    lotteryTickets.push(newLotteryTicket)


    // cho phép người dùng chọn :  tự chọn số hoặc số ngẫu nhiên
    let choose
    do {
        choose = +prompt("Bạn có 2 lựa chọn \n 1.Bạn muốn tự chọn số \n 2.Hệ thống tự chọn ngẫu nhiên")
        if (choose !== 1 && choose !== 2) {
            alert("bạn chỉ được chon 1 hoặc 2 \n HÃY CHỌN LẠI")
        }
    } while (choose !== 1 && choose !== 2)
    let number = []


    // trường hợp người dùng chọn tự chọn số
    if (choose === 1) {
        for (let i = 0; i < 6; i++) {
            do {
                // cho người dùng nhập vào số muốn chọn với đk phải là số tử 0 --> 99
                number[i] = +prompt("chọn số thứ " + (i + 1) + " (0-->99")
                if (number[i] < 0 || number[i] > 99 || isNaN(number[i]) === true || Number.isInteger(number[i]) === false) {
                    alert("số bạn chọn phải là hai số từ nằm trong khoảng tử 00-->99 \n HÃY NHẬP LẠI")
                }
            } while (number[i] < 0 || number[i] > 99 || isNaN(number[i]) === true|| Number.isInteger(number[i]) === false)
        }
    }


    // trường hợp người dùng chọn vé ngẫu nhiên
    else {
        for (let i = 0; i < 6; i++) {
            number[i] = Math.floor(Math.random() * 100)
        }
    }
    // set thuộc tính number cho obj newLotteryTicket với tham số truyền vào là mảng number vối 6 phần tử vửa nhập/tạo ở trên
    newLotteryTicket.setNumber(number)
    // in vé vừa mua ra màn hình
    let table = "<tr>"
    for (let i = 0; i < 6; i++) {
        table += " <td>" + "<button>" + newLotteryTicket.getNumber()[i] + "</button>" + "</td>"
    }
    table += "</tr>"
    document.getElementById("lottery").innerHTML += table
}


// hàm kiểm tra kqxs
function checkResult() {
    let result = []
    let table = "<tr>" + "<th colspan='6'>Kết quả</th>" + "</tr>" + "<tr>"
    // tìm kqxs và truyền vào mảng result
    for (let i = 0; i < 6; i++) {
        result[i] = Math.floor(Math.random() * 100)
        table += "<td>" + "<button>" + result[i] + "</button>" + "</td>"
    }
    table += "</tr>"
    document.getElementById("lottery").innerHTML += table
    // kiểm tra/ so sánh kết quả vừa tìm với vé đã mua
    for (let i = 0; i < lotteryTickets.length; i++) {
        let count = 0
        for (let j = 5; j >= 0; j--) {
            if (result[j] === lotteryTickets[i].getNumber()[j]) {
                count++
                console.log(count)
            } else {
                break
            }
        }
        switch (count) {
            case 1:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé " + (i + 1)
                    + " của bạn đã trúng giải khuyến khích trị giá: $10.000" + "<br>"
                break
            case 2:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé " + (i + 1)
                    + " của bạn đã trúng giải tư trị giá: $50.000" + "<br>"
                break
            case 3:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé " + (i + 1)
                    + " của bạn đã trúng ba trị giá: $100.000" + "<br>"
                break
            case 4:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé " + (i + 1)
                    + " của bạn đã trúng giải nhì trị giá: $250.000" + "<br>"
                break
            case 5:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé " + (i + 1)
                    + " của bạn đã trúng giải nhất trị giá: $500.000" + "<br>"
                break
            case 6:
                document.getElementById("result").innerHTML += "Chúc mừng bạn vé "
                    + (i + 1) + " của bạn đã trúng giải đặc biệt trị giá: $10.000.000" + "<br>"
                break
            default :
                document.getElementById("result").innerHTML += "Vé " + (i + 1)
                    + " của bạn đã toang, Chúc mừng bạn đã mất tiền :D" + "<br>"
        }
    }
    document.getElementById("result").innerHTML += "<button onclick='playAgain()'>Mua lại</button>"
}

// hàm cho phép mua lại
function playAgain() {
    document.getElementById("lottery").innerText = ''
    document.getElementById("result").innerText = ''
    lotteryTickets = []
}

