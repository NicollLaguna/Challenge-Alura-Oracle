
function encryptText() {

    let inputText = document.querySelector('#inputText').value;
    if (inputText === "") {
        alert("El mensaje está vacío");
        return;
    }

    if (!isValidText(inputText)) {
        showOutput(inputText);
        alert('Solo letras minúsculas y sin acentos');
        return;
    }
    
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    showOutput(encryptedText);
}

function decryptText() {
    let inputText = document.querySelector('#inputText').value;
    if (inputText === "") {
        alert("El mensaje está vacío");
        return;
    }
    if (!isValidText(inputText)) {
        showOutput(inputText);
        alert('Solo letras minúsculas y sin acentos');
        return;
    }
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    showOutput(decryptedText);
}

function isValidText(text) {
    return /^[a-z\s]+$/.test(text);
}

function showOutput(text) {
    document.querySelector('#outputText').value = text;
    document.querySelector('#outputContainer').style.display = 'block';
    document.querySelector('#welcomeImage').style.display = 'none';
}

function copyText() {
    let outputText = document.querySelector('#outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
    clearTextareas();
}

function clearTextareas() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').value = "";
    document.getElementById('outputContainer').style.display = 'none';
    document.getElementById('welcomeImage').style.display = 'block';
}
