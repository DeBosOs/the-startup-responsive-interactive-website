// koop animatie

const koopKnop = document.querySelector("#cart");
const mandje = document.querySelector("#cartIcon");

var aantal = 0;

koopKnop.addEventListener('click', () => {
    mandje.classList.toggle('bewegen');
});
