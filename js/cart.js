
function showProduct () {
    var item = localStorage.getItem('cart');
    var cart = JSON.parse(item);

    var info_cart = "";
    console.log(cart)

    for (let i =0; i< cart.length; i++) {
        var total_price = cart[i][1] * cart[i][3];
        info_cart += '<tr>' +
        '<td style="display: flex; align-items: center;"><img style=" max-height: 100px;" src="'+cart[i][0]+'">'+cart[i][2]+'</td>' +
        '<td style="text-align: center;"><p style="color: #faa307; font-weight: 700;"><span >'+cart[i][1]+'</span> <sup>đ</sup></p></td>'+
        '<td> <li style="text-align: center; color: #faa307; font-weight: 700;">'+cart[i][3]+'</li></td>'+
        '<td style="padding: 0 10px;"><button style="width: 100%; padding: 10px 10px; font-weight: 700; color: #fff; background-color: #ff4d6d; border-radius: 10px; ">Xóa</button></td>'+
        '</tr>' ;
        
    }
    document.getElementById('myCart').innerHTML = info_cart
}
showProduct () 
