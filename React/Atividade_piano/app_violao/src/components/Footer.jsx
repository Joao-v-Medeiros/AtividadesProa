import Style from '../CSS/Footer.module.css';
import insta from '../assets/img/insta.png';
import face from '../assets/img/face.png';
import whats from '../assets/img/whats.png';

function Footer() {
    return (
        <section className={Style.footer}>
            <h3>Nossa Loja - Instrumentos Musicais</h3>
            <p className={Style.footer_texto}>Rua tito, 54 - Lapa</p>
            <p className={Style.footer_texto}>São Paulo -Brasil</p>

            <div className={Style.footer_redes}>
                <img src={insta} alt="Instagram" className={Style.footer_redes_img} />
                <img src={face} alt="Facebook" className={Style.footer_redes_img} />
                <img src={whats} alt="WhatsApp" className={Style.footer_redes_img} />
            </div>

        </section>
    )
}

export default Footer;