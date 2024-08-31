const btn = document.getElementById("btn");
const hex = document.getElementById("hex-code");

function randomColor(){
    let color = "#";
    let letter = "0123456789ABCDEF";

    for(let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
        hex.innerHTML = color;
    }
    return color;
}

btn.addEventListener('click',() => {
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor();
})
