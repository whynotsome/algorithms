package MDC.mdcJAVA;

public class Main {
    public static void main(String[] args) {
      Mdc mdc = new Mdc();
      mdc.num1 = 16;
      mdc.num1 = 24;
      mdc.calculoDoMDC();
      System.out.println(mdc.calculoDoMDC());
    }
  
  }