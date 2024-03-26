const button = document.querySelector(".saveAvt button");
const avatarPic = document.querySelector(".avatarPic");
const img = document.querySelector("#inputImage");
const inputUser = document.querySelector("#username");
const Avatar = document.querySelector(".Avatar");
const AccountName = document.querySelector(".AccountName");
const btn_save = document.querySelector(".btn_save");
const getImg = localStorage.getItem("image");
const username = sessionStorage.getItem("login");


if (username != null){
    inputUser.value = username

}


if (username != null){
    AccountName.innerText = username;

}


if ( getImg != null ){
    Avatar.innerHTML = localStorage.getItem("image")
    avatarPic.innerHTML = localStorage.getItem("image")
}
button.addEventListener("click", () =>{
    img.click();
})
img.addEventListener('change', function(){
    const file = this.files[0];
    showImage(file);

});

function showImage(file) {
    let fileType =  file.type;
    let rulesFile = ['image/jpeg', 'image/png', 'image/jpg'];
    if (rulesFile.includes(fileType)){
        let fileShow = new FileReader();
        fileShow.onload = () =>{
            let fileUrl = fileShow.result;
            let image = '<img src="'+[fileUrl]+'" alt="">';
            avatarPic.innerHTML = image;
        }
        fileShow.readAsDataURL(file);
    } else {
        alert("Vui lòng tải lên một ảnh có phần mở rộng jpeg,png,jpg")
    }
    
}

btn_save.addEventListener("click", function(){
    image = avatarPic.innerHTML;
    localStorage.setItem("image",image)

})