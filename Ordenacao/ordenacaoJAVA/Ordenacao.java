package Ordenacao.ordenacaoJAVA;

public class Ordenacao {

    public void quicksort(int[] conteudoPraOrdenar, int comeco, int fim) {
        if (comeco < fim) {
            int index = organizacao(conteudoPraOrdenar, comeco, fim);
            quicksort(conteudoPraOrdenar, comeco, index - 1);  
            quicksort(conteudoPraOrdenar, index + 1, fim);  
        }
    }

    private int organizacao(int[] ordenando, int comeco, int fim) {
        int pivo = ordenando[fim]; 
        int i = comeco - 1;    

        for (int j = comeco; j < fim; j++) {
            if (ordenando[j] <= pivo) {
                i++;
                int temp = ordenando[i];
                ordenando[i] = ordenando[j];
                ordenando[j] = temp;
            }
        }

        int temp = ordenando[i + 1];
        ordenando[i + 1] = ordenando[fim];
        ordenando[fim] = temp;

        return i + 1;  
    }

    public void printArray(int[] array) {
        for (int i : array) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}