function quicksort(array, comeco, fim) {
    if (comeco < fim) {
        let index = organizacao(array, comeco, fim);
        quicksort(array, comeco, index - 1); 
        quicksort(array, index + 1, fim); 
    }
}

function organizacao(array, comeco, fim) {
    let pivo = array[fim];
    let indexMenores = comeco - 1;

    for (let atual = comeco; atual < fim; atual++) {
        if (array[atual] <= pivo) {
            indexMenores++;
            [array[indexMenores], array[atual]] = [array[atual], array[indexMenores]];
        }
    }

    [array[indexMenores + 1], array[fim]] = [array[fim], array[indexMenores + 1]];

    return indexMenores + 1;
}

function printArray(array) {
    return array.join(', ');
}

function mostrarOrdenacao() {
    let input = document.getElementById("Ordenacao").value;
    let array = input.split(',').map(Number); 
    
    if (array.some(isNaN)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos (números separados por vírgula).";
        return;
    }

    document.getElementById("resultado").innerHTML = "Antes da organização: " + printArray(array);

    quicksort(array, 0, array.length - 1);

    document.getElementById("resultado").innerHTML += "<br>Depois da organização: " + printArray(array);
}

function limparResultado() {
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("Ordenacao").value = '';
}

document.getElementById("calcularOrdenacao").addEventListener("click", mostrarOrdenacao);
document.getElementById("limpar").addEventListener("click", limparResultado);