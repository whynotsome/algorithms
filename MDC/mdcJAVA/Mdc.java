package MDC.mdcJAVA;

public class Mdc {
    public int num1;
    public int num2;

    public int calculoDoMDC(){
        while (num2 != 0){
            int aux = this.num2;
            this.num2 = this.num1  % this.num2;
            this.num1 = aux;
        }
        return this.num1;
    }
}