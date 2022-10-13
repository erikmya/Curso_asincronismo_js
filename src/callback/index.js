function suma(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2,sumar){
    return sumar(num1, num2);
};

console.log(calc(2,2, suma));

setTimeout(function () {
    console.log('¡Hola!');  
}, 3500)

function saludo(name) {
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Erik!');

function llama(nombre) {
    console.log(`window ${nombre}`);
}

setTimeout(llama, 2000, 'Registro despues de 2 Segundos');

// Otro ejercicio

export function llama(nombre) {
    console.log(`window ${nombre}`);
}

window.setTimeout(llama, 2000, 'Registro despues de 2 Segundos');

// otro intento

export function runCode(callback) {
    window.setTimeout(callback, 2000);
  }
  function print(message) {
    return message;
  }
  
  runCode(print('log after 2s'));