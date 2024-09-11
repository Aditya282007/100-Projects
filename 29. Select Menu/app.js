const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');
const options = document.querySelectorAll('.options');

arrowIcon.addEventListener('click',() => {
    list.classList.toggle('hide');
})

options.forEach(option => {
    option.addEventListener('click',() => {
        selectText.innerHTML = option.children[1].innerHTML;
        list.classList.toggle('hide');
    })
})

selectField.addEventListener('click',() => {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
})