let click = document.querySelector('.click');
let list = document.querySelector('.list');
click.addEventListener("click", () => {
    list.classList.toggle('newlist');
});

const trigger = document.querySelector('#trigger');
const modalWrapper = document.querySelector('.modal__wrapper');
const closeBtn = document.querySelector('.close');

trigger.addEventListener('click', function () {
    openModal();
});

const trigger1 = document.querySelector('#trigger1');
const modalWrapper1 = document.querySelector('#modal__wrapper1');
const closeBtn1 = document.querySelector('.close');

trigger.addEventListener('click', function () {
    openModal();
});








closeBtn.addEventListener('click', function () {
    closeModal();
});

modalWrapper.addEventListener('click', function (e) {
    if (e.target !== this) return;
    closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})


//Functions 
function openModal() {
    modalWrapper.classList.add('active');
}

function closeModal() {
    modalWrapper.classList.remove('active');
}