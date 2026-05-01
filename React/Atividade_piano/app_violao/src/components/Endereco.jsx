import Style from '../CSS/Endereco.module.css';

function Endereco() {
    return(
        <section className={Style.container}>

            <div className={Style.mapa}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116985.82014881608!2d-46.81964536553396!3d-23.611258007280377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.                                                 1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1777671384128!5m2!1spt-BR!2sbr"
                ></iframe>

            </div>

            <div className={Style.loja}>
                <h2 className={Style.loja_fonte}>Nossa Loja - Intrumentos Musicais</h2>

                <p className={Style.loja_texto}>Está situada na Rua Tito, 54 – Pompeia, próxima ao teatro Cacilda Becker, em uma construção de século XIX, com área de 500m², oferecendo uma ampla variedade de instrumentos, em um ambiente agradável para toda a família.</p>

            </div>

        </section>
    )
}

export default Endereco;