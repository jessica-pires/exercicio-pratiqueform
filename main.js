let campoaA = document.querySelector('#campoaA');
let campoaB = document.querySelector('#campoB');
let form = document.querySelector('.form');
let mensageError = document.querySelector('.mensagem-error');
let alertSucess = document.querySelector('.alert-sucess');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    verificaNumber(Number(campoaA.value), Number(campoaB.value));
});

function verificaNumber(valorA, valorB) {
    if (valorA > valorB) {
        mensageError.innerHTML = 'Insira um número do campo B maior que o número do campo A';
        mensageError.classList.add('class-mensagem-error');
        mensageError.style.display = 'block';
    } else {
        alertSucess.innerHTML = 'Validação concluída';
        alertSucess.classList.add('alert-sucess');
        alertSucess.style.display = 'block';
    }
}
