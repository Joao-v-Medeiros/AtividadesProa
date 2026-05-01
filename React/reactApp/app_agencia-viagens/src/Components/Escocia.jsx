import Style from '../CSS/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../assets/imagens/escocia.png'
import Login from './Login'
import imagem from '../assets/imagens/viagens.jpg'

function Escocia(){
    return(
        
        <section className={Style.fundo_escocia}>

            <h1>Venha conhecer a Escócia</h1>
            <ComponenteProps 
                lugar="Escócia"
                texto="Esse país fantástico, com seus incantos e seus castelos medievais, te aguardam para um roteiro inesquecível "
                bandeira={Bandeira_escocia}
            />

            <Login 
                logo={imagem}
                texto_logo="Compre agora sua passagem"
            />


        </section>

    )

}

export default Escocia