const Cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e) => { 
    Cursor.setAttribute("style", "top: "+(e.pageY -2)+"px; left: "+(e.pageX - 2)+"px;")
})

document.addEventListener("click",() => {
    Cursor.classList.add("expand");

    setTimeout(() => {
        Cursor.classList.remove("expand");
    }, 500)
})