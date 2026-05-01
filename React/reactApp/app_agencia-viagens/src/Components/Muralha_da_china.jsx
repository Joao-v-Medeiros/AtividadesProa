import Style from '../CSS/Muralha_da_china.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_muralha from '../assets/imagens/china.png'
import Login from './Login'
import imagem from '../assets/imagens/viagens.jpg'

function Muralha_da_china(){
    return(

        <section className={Style.muralha_da_china}>

            <h1>Venha conhecer a Muralha da china</h1>

            <ComponenteProps 
                lugar="Muralha da china"
                texto="Esse país fantástico, com seus incantos e seus castelos medievais, te aguardam para um roteiro inesquecível!! "
                bandeira={Bandeira_muralha}
            />

            <Login 
                logo={imagem}
                texto_logo="Compre agora sua passagem"
            />

        </section>

    )

}

export default Muralha_da_china