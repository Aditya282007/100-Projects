document.getElementById('btn').addEventListener('click',function() {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result');
    let oprator = document.getElementById('selectOp').value;

    switch(oprator){
        case 'plus':
            result.innerHTML = parseInt(num1) + parseInt(num2);
            break;
        case 'sub':
            result.innerHTML = parseInt(num1) - parseInt(num2);
            break;
        case 'mul':
            result.innerHTML = parseInt(num1) * parseInt(num2);
            break;
        case 'div':
            result.innerHTML = parseInt(num1) / parseInt(num2);
            break;
    }
})