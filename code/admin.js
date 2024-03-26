const btnChange = document.querySelector('#change-info');
const input = document.querySelectorAll("input");
const btnImg = document.querySelector("#btnImg");
const img = document.querySelector("#img");
const btnSave = document.querySelector(".btnSave");
const btnLogOut = document.querySelector(".account button");



btnLogOut.addEventListener("click", () =>{

    if(confirm("Bạn có chắc chắn muốn đăng xuất không?") == true){
        window.location.href = "main.html";
    };
})


//Cho phép chọn ảnh
btnImg.addEventListener('click',()=>{
    img.click();

});

// Khi click chỉnh sửa xóa thuộc tính disableb của thẻ input và cho phép người dùng nhập liệu
btnChange.addEventListener('click', function() {
    for (let i = 0; i < input.length; i++) {
    input[i].removeAttribute('disabled', 'disabled');
    }
});

img.addEventListener("change", function(){
    const file = this.files[0];
    showImage(file);

});

function showImage (file){
    let fileType =  file.type;
    let rulesFile = ['image/jpeg', 'image/png', 'image/jpg'];
    if (rulesFile.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let fileUrl = fileReader.result;
            let image = '<img src="'+[fileUrl]+'" alt="">';
            btnImg.innerHTML = image;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("Vui lòng tải lên một ảnh có phần mở rộng jpeg,png,jpg")
    }

}
