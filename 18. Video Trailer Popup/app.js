const Button = document.querySelector('.btn');
const closebtn = document.querySelector('.close-icon');
const Trailer = document.querySelector('.trailer-container');
const video = document.querySelector("video");

Button.addEventListener('click',() => {
    Trailer.classList.remove('active');
    video.play();
    video.currentTime = 0;
})

closebtn.addEventListener('click',() => {
    Trailer.classList.add('active');
    video.pause();
})