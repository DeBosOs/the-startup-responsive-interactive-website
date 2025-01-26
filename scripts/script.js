// purchase animation

const koopKnop = document.querySelector(".cart");
const mandje = document.querySelector("#cartIcon");

koopKnop.addEventListener('click', () => {
    mandje.classList.toggle('bewegen');
    if (mandje.src.includes("mandje.png")) {
        mandje.src = "images/mandje2.png";
    } else {
        mandje.src = "images/mandje.png";
    }
});

