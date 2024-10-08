function gerarCamposNumeros() {
    let quantidade = parseInt(document.getElementById("quantidadeNumeros").value);
    let container = document.getElementById("inputsNumeros");
    container.innerHTML = ''; 

    if (quantidade > 0) {
        for (let i = 0; i < quantidade; i++) {
            let input = document.createElement("input");
            input.type = "number";
            input.id = "numero" + i;
            input.placeholder = "Número " + (i + 1);
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
        }
    } else {
        container.innerHTML = "Por favor, insira uma quantidade válida.";
    }
}

function calcularSomatorio() {
    let quantidade = parseInt(document.getElementById("quantidadeNumeros").value);
    let soma = 0;

    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(document.getElementById("numero" + i).value);
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            document.getElementById("resultado").innerHTML = "Por favor, preencha todos os números corretamente.";
            return;
        }
    }

    document.getElementById("resultado").innerHTML = "A soma dos " + quantidade + " números é " + soma;
}

function limparResultado() {
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("quantidadeNumeros").value = '';
    document.getElementById("inputsNumeros").innerHTML = '';
}

document.getElementById("gerarCampos").addEventListener("click", gerarCamposNumeros);
document.getElementById("calcularSomatorio").addEventListener("click", calcularSomatorio);
document.getElementById("limpar").addEventListener("click", limparResultado);
