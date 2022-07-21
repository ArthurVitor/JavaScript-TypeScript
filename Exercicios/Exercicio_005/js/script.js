const numero = Number(prompt('Digite um numero: '));
const numeroTitulo = document.getElementById('numeroTitulo');
const raizQuadrada = document.getElementById('raizQuadrada');
const isInt = document.getElementById('isInt')
const isNaN = document.getElementById('isNaN')
const floor = document.getElementById('floor')

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<h2>A raiz quadrada do seu número é: ${numero ** 0.5}</h2>`;
isInt.innerHTML = `<h2>${numero} é inteiro: ${Number.isInteger(numero)}</h2>`;
isNaN.innerHTML = `<h2>${numero} é NaN: ${Number.isNaN(numero)}</h2>`
