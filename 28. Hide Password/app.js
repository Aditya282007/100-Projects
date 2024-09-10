const input = document.querySelector('input');
const eyeIcon = document.querySelector('#eye-icon');

eyeIcon.addEventListener('click',() => {
    if(input.type === 'password'){
        input.type = 'text';
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.classList.remove('fa-eye');
    }
    else{
        input.type = 'password';
        eyeIcon.classList.add('fa-eye');
        eyeIcon.classList.remove('fa-eye-slash');
    }
})