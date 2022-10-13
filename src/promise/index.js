// const promise = new Promise(function (resolve, reject) {
//     resolve('¡Hey!')
// });

// const cows = 9;

// const countcows = new Promise(function (resolve, reject){
//     if (cows > 10) {
//         resolve(`Tenemos ${cows} vacas en la granjita :3`);
//     } else {
//         reject("No contamos con vacas en la granjita :c");
//     }
// });

// countcows.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log('Final'));

//Reto clase 12

// const promesa = (function(time, message){
//     time = setTimeout(2000, "Hola despues de 2 segundos")
//     .then((time) => console.log `window ${time}`);
// });

// reto clase 12

function delay(time, message) {
    return new promise(function(resolve, reject) {
        if (time >= 0)
        window.setTimeout(() => resolve(message), time)
        else reject("El timempo no puede ser negativo")
    })
}

delay(2000, "Hello after 2s")
    .then((message) => {
        console.log(message)
    }) .catch((error) => { 
        console.log(error)
    }) .finally(() => console.log ('Ultimo'));

    // reto clase 12

    export function delay(time, message) {
        return new Promise(function (resolve, reject) {
          if (time > 1999) {
            window.setTimeout(() => {
              resolve(message);
            }, time)
          } else {
            reject('No se hizo');
          }
        })
      }