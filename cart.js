var minus = document.querySelector('.btn-minus');
var plus = document.querySelector('.btn-plus');
var input = document.querySelector('.about__content-number-btns-input');

plus.addEventListener('click', function() {
    input.value = Number(input.value) + 1;

})

minus.addEventListener('click', function() {
    if (input.value > 0) {
        input.value -= 1;
    }
})