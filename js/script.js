const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('.box-menu')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('line1')
    menu.classList.toggle('line2')
    menu.classList.toggle('line3')
    navlist.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.toggle('line1')
    menu.classList.toggle('line2')
    menu.classList.toggle('line3')
    navlist.classList.remove('active')
}