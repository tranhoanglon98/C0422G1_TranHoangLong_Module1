let productList = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S",
    "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71",];

function display() {
    let table = "<tr>"+ "<th style='text-align: left'>Product Name</th>" + "<td colspan='2' id='total' style='text-align: right'></td>"
    for (let i = 0; i < productList.length; i++) {
        table += "<tr>" + "<td>" + productList[i] + "</td>" +
            "<td><button type='submit' onclick='editProduct("+ i +")'>Edit</button></td>" +
            "<td><button type='submit' onclick='delteProduct("+ i +")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("displayTable").innerHTML = table
    document.getElementById("total").innerHTML = productList.length + " products"

}
onload = display


function addProduct() {
    let newProduct = document.getElementById("newProduct").value;
    let confirmAdd = confirm("add " + newProduct + " to the list?")
    if(confirmAdd === true) {
        productList.push(newProduct)
        alert( newProduct + " has been added to the list")
        display()
    }
    document.getElementById("total").innerHTML = productList.length + " products"
    document.getElementById("newProduct").value = ""
}

function delteProduct(index) {
    if (confirm("Delete " + productList[index] + " ?")){
        productList.splice(index,1)
        display()
    }
}

function editProduct(index) {
   let change = prompt("Change " + productList[index])
    if (confirm("Change " + productList[index] + " to " + change + " ?")){
        productList[index] = change
        display()
    }
}






