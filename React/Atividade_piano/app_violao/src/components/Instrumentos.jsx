import Style from '../CSS/Instrumentos.module.css';
import violao from '../assets/img/guitarrinha.jpg'

function Instrumentos() {
    return (
        <section className={Style.container}>

            <div className={Style.instrumentos}>

                <img src={violao} alt="" className={Style.violinha}/>

                <h2>Violão Clássico Yamaha C70 II
Cordas de nylon, acústico
 natural brilhante</h2>

                <p className={Style.preco}>Preço: R$ 989,50</p>
            </div>

            <div className={Style.instrumentos}>
            <img src={violao} alt="" className={Style.violinha}/>
                <h2>Violão Clássico Yamaha C70 II 
Cordas de nylon,  acústico
 natural brilhante</h2>

                <p className={Style.preco}>Preço: R$ 989,50</p>
            </div>

            <div className={Style.instrumentos}>
            <img src={violao} alt="" className={Style.violinha}/>
                <h2>Violão Clássico Yamaha C70 II
Cordas de nylon,  acústico
 natural brilhante</h2>

                <p className={Style.preco}>Preço: R$ 989,50</p>
            </div>

            <div className={Style.instrumentos}>
            <img src={violao} alt="" className={Style.violinha}/>
                <h2>Violão Clássico Yamaha C70 II
Cordas de nylon,  acústico
 natural brilhante</h2>

                <p className={Style.preco}>Preço: R$ 989,50</p>
            </div>

            

        </section>
    );
}

export default Instrumentos;