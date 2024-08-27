
function calcularMDC(n1, n2){
    while (n2 !== 0) {
        let aux = n2;
        n2 = n1 % n2;
        n1 = aux;
    }
    return n1;
}

let n1 = 16;
let n2 = 24;
document.write(`o mdc é ${calcularMDC(n1, n2)}`)