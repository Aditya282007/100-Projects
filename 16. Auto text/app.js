const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const words = ['Awesome','Cool','Fun','Famous','Weird'];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text

let index = 0;
let charIndex = 0;

function type() {

    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else {
        setTimeout(erase,newTextDelay);
    }
}

function erase() {

    if(charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else {
        index++;
        if(index >= words.length) index = 0;
        setTimeout(type,newTextDelay);
    }
}


document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (words.length) setTimeout(type, newTextDelay + 250);
})