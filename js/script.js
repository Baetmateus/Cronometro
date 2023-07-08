const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const mili = document.querySelector('.mili');
const iniciar = document.querySelector('.container-botoes .btn:nth-child(1)');
const parar = document.querySelector('.container-botoes .btn:nth-child(2)');
const resetar = document.querySelector('.container-botoes .btn:nth-child(3)');

let tempoTotal = 0;
let intervalId;

function atualizarCronometro(){
    tempoTotal += 10;

    const tempoAtual = new Date(tempoTotal);
    const minuto = tempoAtual.getMinutes().toString().padStart(2, '0');
    const segundo = tempoAtual.getSeconds().toString().padStart(2, '0');
    const milisegundos = tempoAtual.getMilliseconds().toString().padStart(2, '0');

    minutos.textContent = minuto + ":";
    segundos.textContent = segundo + ":";
    mili.textContent = milisegundos;
}


iniciar.addEventListener('click', iniciarCronometro);

function iniciarCronometro(){
    intervalId = setInterval(atualizarCronometro, 10); 
       iniciar.removeEventListener('click', iniciarCronometro);
}

parar.addEventListener('click', function() {
    clearInterval(intervalId);
    iniciar.addEventListener('click', iniciarCronometro);
  });
  
resetar.addEventListener('click', function() {
    tempoTotal = 0;
    minutos.textContent = '00:';
    segundos.textContent = '00:';
    mili.textContent = '00';
    clearInterval(intervalId);
  });