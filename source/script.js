const navClose = document.querySelector(".page-header__closed");
const navButton = document.querySelector(".navigation__button");
navButton.addEventListener("click", (function() {
    navClose.classList.contains("page-header__opened") ? (navClose.classList.remove("page-header__opened"),
    navClose.classList.add("page-header__closed")) : (navClose.classList.add("page-header__opened"),
    navClose.classList.remove("page-header__closed"))
}
));

const navItem = document.querySelectorAll('.navigation__item');
const submenuClose = document.querySelectorAll(".navigation__list-submenu");
const mobilebutton = document.querySelectorAll(".navigation__item-mobil");

navItem.forEach((e=>e.addEventListener("click", (e=>{

    // navItem.classList.contains("submenu") ? (submenuClose.classList.remove("submenu__close"),
    // submenuClose.classList.add("submenu__open")) : (submenuClose.classList.add("submenu__close"),
    // submenuClose.classList.remove("submenu__open"))

}))));
