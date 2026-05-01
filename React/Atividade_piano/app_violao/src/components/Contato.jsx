import Styles from '../CSS/Contato.module.css';
import insta from '../assets/img/insta.png';
import face from '../assets/img/face.png';
import whats from '../assets/img/whats.png';

function Contato() {
    return(
        <section className={Styles.container}>  

            <div className={Styles.contato}>
                <input type="text" placeholder="Nome" />   
                <input type="email" placeholder="Email" />   
                <input type="text" placeholder="Mensagem" className={Styles.texto}/>  
                <button>Clique aqui</button> 
            </div>
            
            <div className={Styles.redes}>

                <h2 className={Styles.titulo}>Acesse também nossas redes sociais:</h2>

                <div className={Styles.logos}>
                    <img src={insta} alt="Instagram" className={Styles.logo} />
                    <img src={face} alt="Facebook" className={Styles.logo} />
                    <img src={whats} alt="WhatsApp" className={Styles.logo} />
                </div>

            </div>

        </section>
    )

}

export default Contato;