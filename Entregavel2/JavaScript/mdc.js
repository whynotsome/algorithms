function calcularMDC(n1, n2) {
    while (n2 !== 0) {
        let aux = n2;
        n2 = n1 % n2;
        n1 = aux;
    }
    return n1;
}

function mostrarMDC() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    if (!isNaN(n1) && !isNaN(n2)) {
        let mdc = calcularMDC(n1, n2);
        document.getElementById("resultadoMDC").innerHTML = `O MDC é ${mdc}`;
    } else {
        document.getElementById("resultadoMDC").innerHTML = "Por favor, insira dois números válidos.";
    }
}