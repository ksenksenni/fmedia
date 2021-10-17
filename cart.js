var minus = document.querySelector('.btn-minus');
var plus = document.querySelector('.about__content-number-btns-input');
var input = document.querySelector('.btn-plus');

if (input.value > 0) {
    plus.addEventListener('click', function() {
        return input.value++;
    })

    minus.addEventListener('click', function() {
        return input.value--;
    })
} else {
    minus.addEventListener('click', function() {
        return input.value = 0;
    })
}