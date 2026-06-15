public class TesteMain2 {
    public static void main(String[] args) {

        Festa festa = new Festa();

        festa.setTema("Super-Heróis");
        festa.setLocal("Salão de Festas Central");
        festa.setQuantidadeConvidados(50);
        festa.setOrcamento(2500.00);
        festa.setData("20/12/2026");

        System.out.println("Tema: " + festa.getTema());
        System.out.println("Local: " + festa.getLocal());
        System.out.println("Convidados: " + festa.getQuantidadeConvidados());
        System.out.println("Orçamento: R$ " + festa.getOrcamento());
        System.out.println("Data: " + festa.getData());
    }
}