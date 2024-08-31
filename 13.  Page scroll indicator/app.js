let indicator = document.querySelector(".scroll-indicator .progress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll',() => {
    let scrolled = window.scrollY;
    indicator.style.width = (scrolled / height) * 100 + "%";

    if(window.scrollY == 0){
        indicator.style.width = "0%";
    }
})