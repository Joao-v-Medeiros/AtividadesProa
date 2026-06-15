public class Main {
    public static void main(String[] args) {

        Celular celular = new Celular();

        celular.setMarca("Samsung");
        celular.setModelo("S23");
        celular.setCor("Preto");
        celular.setArmazenamento(256);
        celular.setvalor(5000);

        System.out.println(celular.getMarca());
        System.out.println(celular.getModelo());
        System.out.println(celular.getCor());
        System.out.println(celular.getArmazenamento());
        System.out.println(celular.getvalor());
    }
}