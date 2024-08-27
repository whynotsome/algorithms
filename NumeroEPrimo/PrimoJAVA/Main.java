package NumeroEPrimo.PrimoJAVA;

public class Main {
    public static void main(String[] args) {
        Primo primo = new Primo();
        int limite = 30;
        for (int daVez = 2; daVez <= limite; daVez++) {
            if (primo.primo(daVez)) {
                System.out.println(daVez); 
            }
        }
    }
}

