var n = prompt("Informe a qunatidade de notas")
var nota
var contador = 0;
var i = 0;

while (i < n) {
    nota = prompt("Informe uma nota")

    if (nota >= 50){
        contador = contador + 1
    }
    i = i + 1;
}
document.write("Numero de alunos que passaram no exame:" + contador);