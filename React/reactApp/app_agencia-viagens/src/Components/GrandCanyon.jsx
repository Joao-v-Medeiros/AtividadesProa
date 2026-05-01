import Style from '../CSS/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_GrandCanyon from '../assets/imagens/usa.png'
import Login from './Login'
import imagem from '../assets/imagens/viagens.jpg'

function GrandCanyon(){
    return( 

        <section className={Style.GrandCanyon}>

            <h1>Venha conhecer o GrandCanyon</h1>

            <ComponenteProps 
                lugar="GrandCanyon"
                texto="Esse país fantástico, com seus incantos e seus castelos medievais, te aguardam para um roteiro inesquecível!! "
                bandeira={Bandeira_GrandCanyon}
            />

            <Login 
                logo={imagem}
                texto_logo="Compre agora sua passagem"
            />

        </section>

    )

}

export default GrandCanyon