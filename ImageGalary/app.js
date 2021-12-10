const images = document.querySelectorAll('.list-images .image');
const pre = document.querySelector('.btn-pre');
const next = document.querySelector('.btn-next');
const closebtn = document.querySelector('.btn-times');
const galary = document.querySelector('.list-full-image');
const list_slide= document.querySelector('.list-full-image .list-container .list-slide')

var margin_left_list_slide = 0;
const image_full_screen_size = 70   // 70vw

var checkList = function(){
    if( (-1)*margin_left_list_slide === ( images.length - 1)*image_full_screen_size )
    {
        next.style.display = 'none';
    }
    else
        next.style.display = 'block';

    if( margin_left_list_slide === 0){
        pre.style.display = 'none'
    }
    else
        pre.style.display = 'block'
}
var slideAction = function (direction) {
    list_slide.style.transition = "0.5s ease-out";
    margin_left_list_slide += image_full_screen_size*direction;
    list_slide.style.marginLeft = margin_left_list_slide + 'vw';
}
closebtn.addEventListener('click', function () {
    galary.classList.toggle('active')
})

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        galary.classList.toggle('active')
        margin_left_list_slide = (-image_full_screen_size)*index;
        list_slide.style.transition = "none";
        list_slide.style.marginLeft = margin_left_list_slide + 'vw';
        checkList()
    })
})

next.addEventListener('click', function () {
    slideAction(-1)
    checkList();
})
pre.addEventListener('click',function(){
    slideAction(1)
    checkList();
})