window.addEventListener ('load', function(){
    const SlideBox = document.querySelector('.SlideBox');
    const slide__Items = document.querySelectorAll('.slide__Item');
    const slide_Wrapper = document.querySelector('.slide_Wrapper');
    const withSliderItem = slide__Items[0].offsetWidth;
    const lenghtSlider = slide__Items.length;
    const btnNext__left = document.querySelector('.btnNext__left');
    const btnNext__right = document.querySelector('.btnNext__right');


    SlideBox.style.with = `${withSliderItem*lenghtSlider}px`;

    let posX = 0;
    let index = 0;

    btnNext__left.addEventListener('click', function(){
        handleChangeSlide (1);
    });
    btnNext__right.addEventListener('click', function(){
        handleChangeSlide (-1);
    });
    function handleChangeSlide(direction) {
        if (direction === 1) {  
            if (index >= lenghtSlider - 1) {
                posX = posX + (withSliderItem* (lenghtSlider - 1));
                index = 0;
                }
            else {
            posX = posX - withSliderItem;
            index++;};
            slide_Wrapper.style = `transform: translateX(${posX}px)`;
            
        } else if (direction === -1) {
            
            if (index <= 0) {
                posX = posX - (withSliderItem*(lenghtSlider - 1));
                index = lenghtSlider - 1;
            } 
            else {
            posX = posX + withSliderItem;
            index--;
            };
            slide_Wrapper.style = `transform: translateX(${posX}px)`;
            
        };
    }

})



