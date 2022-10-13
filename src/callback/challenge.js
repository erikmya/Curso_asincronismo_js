const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatecahnge = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))
            }
        } else {
            const error = newError('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}