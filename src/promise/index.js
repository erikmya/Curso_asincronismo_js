const promise = new Promise(function (resolve, reject) {
    resolve('¡Hey!')
});

const cows = 9;

const countcows = new Promise(function (resolve, reject){
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas en la granjita :3`);
    } else {
        reject("No contamos con vacas en la granjita :c");
    }
});

countcows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Final'));