
// console.log(btn)
var item = ""

if ( item = localStorage.getItem('cart') === null) {
    var cart = new Array();
}
else {
    var item = localStorage.getItem('cart');
    var cart = JSON.parse(item);
    
}
function adProductToCart() {
    var pr_image = document.querySelector('.img-product img').src;
    var pr_price =  document.querySelector('.infor-product #price-product span').innerText;
    var pr_name = document.querySelector('.infor-product #name-product').innerText;
    var pr_total = parseInt ( document.querySelector('.btn-product span input').value);
    var totalPrice = parseInt(pr_price)*pr_total + '.000'
    var product = new Array(pr_image, pr_price, pr_name, pr_total,totalPrice)
    var check = 0
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][2] == pr_name) {
            check = 1;
            pr_total += parseInt (cart[i][3]);
            cart[i][3] = pr_total;
            cart[i][4] =  pr_price*cart[i][3] +'.000';
    
            break
        };
    }
    if (check == 0) {
        cart.push(product);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart))
    countProduct ()

};
function showProduct () {
    var info_cart = "";
    for (let i =0; i< cart.length; i++) {
        info_cart += '<tr>' +
        '<td style="text-align: center;">'+(i+1)+'</td>'+
        '<td style="display: flex; align-items: center;"><img style=" max-height: 100px;" src="'+cart[i][0]+'">'+cart[i][2]+'</td>' +
        '<td style="text-align: center;"><p style="color: #faa307; font-weight: 700;"><span >'+cart[i][1]+'</span> <sup>đ</sup></p></td>'+
        '<td> <li style="text-align: center; color: #faa307; font-weight: 700;">'+cart[i][3]+'</li></td>'+
        '<td style="text-align: center;"><p style="color: #faa307; font-weight: 700;"><span >'+cart[i][4]+'</span> <sup>đ</sup></p></td>'+
        '<td style="padding: 0 10px;"><button onclick = "deleteProduct (this); " style="width: 100%; padding: 10px 10px; font-weight: 700; color: #fff; background-color: #ff4d6d; border-radius: 10px; ">Xóa</button></td>'+
        '</tr>' ;   
    }
    document.getElementById('myCart').innerHTML = info_cart
}
function deleteProduct (x){
    var selectDelPr = x.parentElement.parentElement
    var name = selectDelPr.children[1].innerText
    selectDelPr.remove();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][2]== name) {
            cart.splice(i,1);
            localStorage.setItem("cart", JSON.stringify(cart))
        }   
    }
    totalPayment ()
    showProduct()
    countProduct ()
    totalPayOrder ()
}

function countProduct (){
    document.querySelector('.cart span').innerHTML = cart.length
}

function totalPayment (){
    var x = 0
    for (let i = 0; i < cart.length; i++) {
        totalPay =  parseInt( cart[i][4])
        x = x + totalPay
    }

    
    document.querySelector('.price-total p span').innerHTML = x +'.000'
}



function Order(){
    
    
    var stt = 0;
    var info_order ="";
    for (let i =0; i< cart.length; i++) {
        var price = cart[i][1];

        info_order += '<tr>'+
        '<td style="text-align: center;">'+(i+1)+'</td>'+
        '<td style="text-align: center; max-width: 150px;">'+cart[i][2]+'</td>'+
        '<td style="display: flex; justify-content: center;align-items: center;"><img src="'+cart[i][0]+'" style="max-height: 100px;"></td>'+
        '<td style="text-align: center;"><span>'+cart[i][1]+'</span><sup>đ</sup></td>'+
        '<td style="text-align: center;"><input id="numPr" onchange ="numOfOrder ()" type="number" value="'+cart[i][3]+'" min="1" style="font-size: 16px; width: 50px;"></td>'+
        '<td style="text-align: center;"><span>'+cart[i][4]+'</span><sup>đ</sup></td>'+
        '<td style="text-align: center; color: green;">Đã đặt</td>'+
        '<td style="padding: 0 10px;"> <button style="text-align: center; color: red; cursor: pointer;" onclick = "deleteProduct (this); " >Xóa</button> </td>'+
        '</tr>';

    }
    document.getElementById('orderItem').innerHTML = info_order


}
function totalPayOrder (){
    var x = 0
    for (let i = 0; i < cart.length; i++) {
        totalPay =  parseInt( cart[i][4])
        x = x + totalPay
    }
    x = document.querySelector(".total span").innerHTML = x +'.000'
}

function Cross (){
    var x = 1;
    if (x>0){
        window.location.href = "order.html"
    }
    
}

function numOfOrder (){
    var num = event.target.value;
    price = event.target.parentElement.previousSibling.innerText;
    var total = parseInt(num)*  parseInt(price)
    event.target.parentElement.nextSibling.querySelector('span').innerText = total +".000"
}


//Thêm vào giỏ hàng khi chưa đăng nhập


function addToCart(){
    if (sessionStorage.getItem("login") != null) {
        adProductToCart();
        alert("Đã thêm thành công");
        
    }
    else{
        window.location.href = "login.html"

    }
}
