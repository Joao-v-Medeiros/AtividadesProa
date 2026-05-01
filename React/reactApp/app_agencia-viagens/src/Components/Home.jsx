import Styles from '../CSS/Home.module.css'
import Mala from '../assets/imagens/mala.jpg'

function Home(){
    
    return(
        <section className={Styles.container_home}>
           

            <div className={Styles.esquerda}>
                <img src={Mala} alt='Mala' className={Styles.mala} />
            </div>

            <div className={Styles.direita}>
                <h1 > Encontre aqui a sua viagem dos seus sonhos!! </h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum earum ad, delectus debitis hic nam incidunt, nobis aliquid praesentium quaerat omnis voluptatum expedita illo eaque ipsam reprehenderit sint laudantium? </p>
            </div>

        </section>

    )
}

export default Home