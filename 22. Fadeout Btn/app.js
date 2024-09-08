const arrow =document.getElementById("arrow");

window.addEventListener("scroll",() => {
    let value = window.scrollY;
    if (value <= 5) {
        arrow.classList.toggle('fade-in');
        arrow.classList.toggle('fade-out');
    }
})