import {Link} from 'react-router-dom'
import Styles from '../CSS/Header.module.css'
import Logo from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){
    
    return( 
        <header>

            <img src={Logo} alt='Logo da agencia de viagnes' className={Styles.logo_agencia} />

            <nav className={Styles.menu} >
                <ul>
                    <li> <Link to='/' >Home</Link> </li>
                    <li> <Link to='/Aruba' >Aruba</Link> </li>
                    <li> <Link to='/Escocia' >Escócia</Link> </li>
                    <li> <Link to='/Muralha_da_china' >Muralhas da china</Link> </li>
                    <li> <Link to='/GrandCanyon' >Grand Canyon</Link> </li>
                </ul>
            </nav>

            <div>
                <input type='search' className={Styles.busca} />
            </div>

            <div>
                <img src={Lupa} alt='Lupa' className={Styles.lupa} />
            </div>

        </header>
    )

}

export default Header