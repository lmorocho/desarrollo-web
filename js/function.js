/**
 *
 * console.log('Hola mundo');
let num1=3;
let num2=4;

let result = num1+num2;

console.log('La suma de número1('+num1+') y número2('+num2+') es :'+ result); 
 

document.addEventListener('click',function() {
    console.log('Hola mundo desde EventListener');
    document.getElementById('demo').innerHTML = 'Estamos probando nuestro primer evento en JavaScript';
});

document.getElementById('boton').onclick = function() {
    console.log('Capturamos el evento Click en JS');
    document.getElementById('demo').innerHTML = 'Estamos probando nuestro primer evento en JavaScript';
}
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log('Hola mundo desde EventListener');
    document.getElementById('demo').innerHTML = 'Estamos probando nuestro primer evento en JavaScript';
});


document.getElementById('boton_color').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

document.getElementById('boton_default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('boton_ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName('prueba');
for (let i=0; i < collection.length; i++) {
        collection[i].style.backgroundColor = 'black'
};

