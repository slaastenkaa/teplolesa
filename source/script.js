const navClose = document.querySelector(".page-header__closed");
const navButton = document.querySelector(".navigation__button");
navButton.addEventListener("click", (function() {
    navClose.classList.contains("page-header__opened") ? (navClose.classList.remove("page-header__opened"),
    navClose.classList.add("page-header__closed")) : (navClose.classList.add("page-header__opened"),
    navClose.classList.remove("page-header__closed"))
}
));


const submenuProjectMobil = document.querySelector(".submenu-project");
const submenuProjectListMobil = document.querySelector(".submenu-project__list");
const submenuServicesMobil = document.querySelector(".submenu-services");
const submenuServicesListMobil = document.querySelector(".submenu-services__list");
const mobilebutton = document.querySelectorAll(".navigation__item-mobil");
submenuProjectMobil.addEventListener("click", (function() {
    submenuProjectListMobil.classList.contains("submenu") ? submenuProjectListMobil.classList.remove("submenu") : submenuProjectListMobil.classList.add("submenu");
}
));

submenuServicesMobil.addEventListener("click", (function() {
    submenuServicesListMobil.classList.contains("submenu") ? submenuServicesListMobil.classList.remove("submenu") : submenuServicesListMobil.classList.add("submenu");
}
));

mobilebutton.addEventListener("click", (function() {
    submenuServicesListMobil.classList.contains("submenu") ? submenuServicesListMobil.classList.remove("submenu") : submenuServicesListMobil.classList.add("submenu");
}
));