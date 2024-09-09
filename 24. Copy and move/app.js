const copyText = document.querySelector('textarea[name="copyTxt"]');
const finalText = document.querySelector('textarea[name="finalTxt"]');

const copyBtn = document.querySelector('.copyBtn');
const moverBtn = document.querySelector('.moverBtn');

const output = document.querySelector(".output");

function copyToClipBoard(str){
    const outputContainer = document.querySelector(".output-container");
    const textarea = document.createElement('textarea');
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textarea);
    output.innerHTML = '<h3>Content Copied </h3>';
    output.classList.add('added');

    setTimeout(() => {
        output.classList.remove('added');
        output.textContent='';
    }, 3000)
}

copyBtn.addEventListener('click',() => {
    copyToClipBoard(copyText.value);
})

moverBtn.addEventListener('click',() => {
    finalText.value = copyText.value;
})