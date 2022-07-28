const menuToggler = () =>
{


const btn = document.querySelector(".menuBtn");
const menu = document.querySelector(".boxWrapper")
const menuIcon = document.querySelector("#menuIcon");

// const toggle = () => conso
//btn.addEventListener("click", toggle);

btn.addEventListener("click", () => {
    menu.classList.toggle("showMenu");

    if (menu.classList.contains("showMenu")){
        menuIcon.src = "./images/icon-close.svg"
    }else{
        menuIcon.src = "./images/icon-hamburger.svg"
    }
})

};






window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
    showGreeting();
})

