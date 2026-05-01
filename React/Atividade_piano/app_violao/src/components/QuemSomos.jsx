import Style from '../CSS/QuemSomos.module.css';

function QuemSomos() {
    return(
        <section className={Style.container}>
           <div className={Style.nossa_loja}>   
            <h1>Nossa loja - Instrumentos musicais</h1>

                <p>Somos uma loja de instrumentos musicais, especializada em violões. Oferecemos uma ampla variedade de violões de alta qualidade, desde modelos clássicos até os mais modernos. Nossa missão é proporcionar aos nossos clientes a melhor experiência de compra, oferecendo produtos de qualidade e um atendimento excepcional. Venha conhecer nossa loja e encontre o violão perfeito para você!</p>
           </div>


           <aside className={Style.viola}>

           </aside>

        </section>
    )
}

export default QuemSomos;