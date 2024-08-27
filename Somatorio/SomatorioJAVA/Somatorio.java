package Somatorio.SomatorioJAVA;
import java.util.Scanner;

public class Somatorio {
    int n, num, soma, i = 0;
    Scanner prompt = new Scanner(System.in);

    public void SomaDeNumeros() {
        System.out.println("Quantos números a serem somados: ");
        int n = prompt.nextInt();

        while(i < n){
            i = i + 1;
            System.out.println("Entre com o " + i + "° número");
            num = prompt.nextInt();
            soma += num;
        }
        System.out.println("A soma da: " + soma);
    }
}