function primos(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {   
        if (numero % i === 0) return false; 
    }
    return true;
}

function primosAteNumero(maxNumero) {
    for (let i = 2; i <= maxNumero; i++) {
        if (primos(i)) {
            document.write(i + "<br>");  
        }
    }
}

let numero = 30;
primosAteNumero(numero);