console.log('Hello, world!')

function toggleArrow() {
    const arrowLink = document.querySelector('.arrow-link');
    arrowLink.classList.toggle('clicked');
}

function toggleArrow2() {
    const arrowLink2 = document.querySelector('.arrow-link2');
    arrowLink2.classList.toggle('clicked');
}

let subMenu = document.getElementById("subMenu")
function toggleMenu() {
    subMenu.classList.toggle("open-menu")
}