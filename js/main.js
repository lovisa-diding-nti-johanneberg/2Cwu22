
let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu)

function showMenu() {
    let menu = document.querySelector(".dynamic-menu");
    menu.classList.toggle("visible");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}