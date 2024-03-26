function Validator (options){
    // Lấy thẻ cha từ thẻ input và tìm đến thẻ có thể truy cập vào thẻ thông báo lỗi
    function getParentElement (start, parent){
        while (start.parentElement){
            if (start.parentElement.matches(parent)){
                return start.parentElement;
            };
            start = start.parentElement;
        }
    };
    var saveRules = {};
    // Thực thi validate
    function activeValidate (inputElement, rule){
        var errorText;
        var errorElement = getParentElement(inputElement, options.formParents).querySelector(options.errorSelect);
        var rules = saveRules[rule.selector]
        for (var i = 0; i < rules.length; ++i){
            errorText = rules[i](inputElement.value);
            if(errorText) {break};
        };
        if (errorText){
            errorElement.innerText =  errorText;
            getParentElement(inputElement, options.formParents).classList.add('error');
        }
        else{
            
            deleteError(inputElement, rule);
        };
        return ! errorText;
        
    };
    // Xóa thông bóa lỗi
    function deleteError (inputElement){
        var errorElement = getParentElement(inputElement, options.formParents).querySelector(options.errorSelect);
        errorElement.innerText =  '';
        getParentElement(inputElement, options.formParents).classList.remove('error');

    };
    //Lấy element của chính xác form đang muốn validate (để có thể chính xác cho trường hợp có nhiều form trong cùng 1 trang)
    var formElement = document.querySelector(options.form);

    if (formElement){
        formElement.onsubmit = function(event){
            //event.preventDefault();
            event.preventDefault();
            

            var FormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                
                var fieldValid = activeValidate(inputElement, rule);
                if (!fieldValid) {
                    FormValid = false;
                };
            });
        
            if (FormValid) {
                if (typeof options.submit === 'function') {
                    // Trả về nodeList gồm tất cả những elements có chứa attribute name (TRONG TRƯỜNG HỢP NÀY có chứa name nghĩa là input)
                    var fieldisInput = formElement.querySelectorAll ('[name]');
                    // chuyển từ nodeList  sang Array
                    var valueInput = Array.from(fieldisInput).reduce(function(values, input){
                        values[input.name] = input.value
                        return values;
                    },{});
                    options.submit(valueInput);
                } 
            }
            else {
                alert('Có thông bị không hợp lệ');
            }
        }
        options.rules.forEach(function (rule) {
            // Lưu tất cả các rules của từng element trong form
    
            if (Array.isArray(saveRules[rule.selector])){
                saveRules[rule.selector].push(rule.test);

            } else {
                saveRules[rule.selector] = [rule.test];
            }
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement){
                inputElement.onblur = function(){
                    activeValidate(inputElement, rule);
                };
                inputElement.oninput = function(){
                    deleteError(inputElement, rule);
                }
            };     
        });  
    }
}
Validator.isRequired = function(selector, messNotification){
    return {
        selector: selector,
        test: function (inputValue){
            return inputValue.trim() ? undefined: messNotification || "Vui lòng nhập đúng yêu cầu của trường"
        }
    };   
}
Validator.isConfirmed = function(selector,inputConfirmed, messNotification){
    return {
        selector: selector,
        test: function (inputValue){
            return inputValue === inputConfirmed() ? undefined: messNotification || "Vui lòng nhập giống trường cần xác nhận"
        }
    };
}
//Thao tác đăng nhập
username = document.querySelector('#username');
password = document.querySelector('#password');
//lấy dữ liệu từ session
var isLogin = !!sessionStorage.getItem('login');
var selectorBtn;
if (isLogin) {
    var us = sessionStorage.getItem('login');
    ets_acc = document.querySelector('.ets_acc');
    user = ets_acc.querySelector('p');
    user.innerText = us;
}
function checkLoginCart(){
    if (isLogin){
        window.location.href = "cart.html"
    }else {
        window.location.href = "login.html"
    }  
}
function checkLoginAcc(){ 
    if (isLogin){
        window.location.href = "managerAcc.html"
    }else {
        window.location.href = "login.html"
    }  
}
function checkLoginOrder(){   
    if (isLogin){
        window.location.href = "order.html"
    }else {
        window.location.href = "login.html"
    }  
}

// chọn vị trí add nút đăng xuất
var extension = document.querySelector(".extension");
var divLogOut =  '<div class="logOut" onclick ="logOut()"><button id="logOut">Đăng xuất</button></div>';
if (isLogin) {
    extension.insertAdjacentHTML('afterend',divLogOut);
}
function Redirect(){
    if (username.value === "admin" && password.value === "admin") {
        window.location.href = "admin_managerUsers.html";
        alert("Bạn đã đăng nhập trang dành cho người quản trị")

    }else {
        if (username.value === "lequoc" && password.value === "lequoc") {
            sessionStorage.setItem('login', username.value)
            isLogin = true;
            checkLoginCart();
            checkLoginOrder();
            checkLoginAcc();
            alert ('Thành công');
            window.location.href = "main.html";
                  
        }
        else {
            alert ("Sai thông tin đăng nhập!")
        }

    }
    

}


//Đăng xuất 

 function logOut(){
    if (confirm("Bạn có muốn đăng xuất khỏi MIRACLE?") == true){
        isLogin = false;
        sessionStorage.removeItem('login'); 
        extension.removeAdjacentHTML('afterend',divLogOut);
        
    }

 }



