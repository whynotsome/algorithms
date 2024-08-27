package Ordenacao.ordenacaoJAVA;

public class Main {
    public static void main(String[] args) {
        Ordenacao ordenacao = new Ordenacao();
        int[] array = {5, 12, 42, 24, 2, 7};

        System.out.println("Array antes da ordenacao:");
        ordenacao.printArray(array);

        ordenacao.quicksort(array, 0, array.length - 1);

        System.out.println("Array depois da ordencao:");
        ordenacao.printArray(array);
    }
}
