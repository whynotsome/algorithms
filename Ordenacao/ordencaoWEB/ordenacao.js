let array = [100, 50, 2, 24, 43, 213, 1, 34, 45];

document.write("Antes da organização:<br>");
printArray(array);
quicksort(array, 0, array.length - 1);
document.write("Depois da ordenação:<br>");
printArray(array);

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
    document.write(array.join(' ') + "<br>");
}