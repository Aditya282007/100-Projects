const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

password.addEventListener('input',() => {
    if(password.value === password2.value){
        password2.setCustomValidity('');
    }else{
        password2.setCustomValidity('Passwords do not match');
    }
})

open.addEventListener('click',() => {
    modal.classList.add('show-modal');
})

close.addEventListener('click',() => {
    modal.classList.remove('show-modal');
})

