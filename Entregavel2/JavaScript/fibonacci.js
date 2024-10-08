function calcularFibonacci(termos){
    var sequencia = [0, 1];
    for (var i = 2; i < termos; i++){
        var proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }
    return sequencia.slice(0, termos);
}

document.getElementById("calcularFibonacci").addEventListener("click", function() {
    const quantidadeTermos = parseInt(document.getElementById("Fibonacci").value);

    if(isNaN(quantidadeTermos) || quantidadeTermos < 0){
        document.getElementById("resultado").textContent = "Por favor, insira um numero valido";
        return;
    }

    const resultadoFibonacci = calcularFibonacci(quantidadeTermos);
    document.getElementById("resultado").textContent = resultadoFibonacci.join(", ");

})

document.getElementById("limpar").addEventListener("click", function() {
    document.getElementById("resultado").textContent = "";
})