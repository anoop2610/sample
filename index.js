const body = document.querySelector('body');
const ratingBtns = document.querySelectorAll('.rating-btn');
const ratingSelected = document.querySelector('.rating-selected');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
let rate = 0;

ratingBtns.forEach(ratingBtn);

function ratingBtn(element) {
    element.addEventListener('click', () => {
        ratingBtns.forEach(element => {
            element.classList.remove('rating-clicked');
        })
        element.classList.add('rating-clicked');
    })

}

function rateVal(val) {
    rate = val.value;
}

function submition() {
    ratingSelected.textContent = rate;
    container1.style.display = 'none';
    container2.style.display = 'flex';
}

body.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        submition();
    }
})
