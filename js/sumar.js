
document.getElementById('sumar').addEventListener('click', function(){
    
    
    let numA = document.getElementById('num1').value;
    console.log('El valor del numero A es:'+numA);

    let numB = document.getElementById('num2').value;
    console.log('El valor del numero B es:'+numB);

    
    let resultado = sumar(parseInt(numA),parseInt(numB));
    console.log('El resultado de la suma de A + B es:'+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display='block';
});

function sumar(a,b){
    return a + b;
}