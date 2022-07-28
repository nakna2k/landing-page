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





const showGreeting = () =>{
    const title = document.querySelector("#Greeting");
    const hours = new Date().getHours();
    let text = null;
    if(hours >= 6 && hours < 12){
        text = "Good Morning";
    }
    else if (hours >= 12 && hours < 18){
        text = "Good Evening";
    }
    else if (hours >= 18){
        text = "Good Evening";
    }
    title.textContent = text;
    // title.textContent = "Good Morning"
}

window.addEventListener("DOMContentLoaded", () => {
    menuToggler();
    showGreeting();
})

