import Style from '../CSS/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_aruba from '../assets/imagens/aruba.png'
import Login from './Login'
import imagem from '../assets/imagens/viagens.jpg'

function Aruba(){
    return(

        <section className={Style.fundo_aruba}>

            <h1>Venha conhecer Aruba</h1>

            <ComponenteProps 
                lugar="Aruba"
                texto="Esse país fantástico, com seus incantos e seus castelos medievais, te aguardam para um roteiro inesquecível!! "
                bandeira={Bandeira_aruba}
            />

            <Login 
                logo={imagem}
                texto_logo="Compre agora sua passagem"
            />


        </section>

    )

}

export default Aruba