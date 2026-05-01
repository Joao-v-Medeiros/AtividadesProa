import Style from '../CSS/Login.module.css'

function Login ({logo, texto_logo}){
    return(
        <div className={Style.corpo_login} >


            <img src={logo} alt="logo" className={Style.imagem_logo} />

            <h2>{texto_logo}</h2>

            <input type="tel" placeholder="Digite seu Nome" />

            <input type="email" placeholder="Digite seu email" />


            <input type="tel" placeholder="Digite seu telefone" />

            <botton>Enviar</botton>



        </div>

    )

}

export default Login