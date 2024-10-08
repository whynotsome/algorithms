function primos(numero) {
    if (numero < 2) return false;
    for (let i = 2; i < numero; i++) {   
        if (numero % i === 0) return false; 
    }
    return true;
}

function primosAteNumero(maxNumero) {
    let resultado = '';
    for (let i = 2; i <= maxNumero; i++) {
        if (primos(i)) {
            resultado += i + "<br>";
        }
    }
    return resultado;
}

function mostrarPrimos() {
    let maxNumero = parseInt(document.getElementById("maxNumero").value);
    if (!isNaN(maxNumero) && maxNumero >= 2) {
        let resultado = primosAteNumero(maxNumero);
        document.getElementById("resultadoPrimos").innerHTML = resultado;
    } else {
        document.getElementById("resultadoPrimos").innerHTML = "Por favor, insira um número maior ou igual a 2.";
    }
}