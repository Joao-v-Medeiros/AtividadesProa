public abstract class FestaDeAniversario {
    private String tema;
    private String local;
    private int quantidadeConvidados;
    private double orcamento;
    private String data;

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public int getQuantidadeConvidados() {
        return quantidadeConvidados;
    }

    public void setQuantidadeConvidados(int quantidadeConvidados) {
        this.quantidadeConvidados = quantidadeConvidados;
    }

    public double getOrcamento() {
        return orcamento;
    }

    public void setOrcamento(double orcamento) {
        this.orcamento = orcamento;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}