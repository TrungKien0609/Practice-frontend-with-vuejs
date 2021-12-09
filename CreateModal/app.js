const open_btn = document.getElementById('open-btn');
const content_inner = document.querySelector('.content .content-inner');
const content = document.querySelector('.content');
const cancel_btn = document.getElementById('cancel-btn');
const close_btn = document.getElementById('close-btn');

var toggle_btn = function () {
    if (content_inner.classList.contains('active') && content.classList.contains('active')) {
        content_inner.classList.remove('active');
        content.classList.remove('active')
    }
    else {
        content_inner.classList.add('active');
        content.classList.add('active')
    }
}
open_btn.addEventListener('click', toggle_btn)
cancel_btn.addEventListener('click', toggle_btn)
close_btn.addEventListener('click', toggle_btn)
content.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        toggle_btn();
    }
})