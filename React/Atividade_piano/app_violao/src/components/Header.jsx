import {Link} from 'react-router-dom' 
import Styles from '../CSS/Header.module.css';

function Header() {
  return (
    <header className={Styles.header}>  
    <nav >
      <ul>
          <li> <Link to="/" >Quem Somos</Link></li>
          <li> <Link to="/instrumentos" >Instrumentos</Link></li>
          <li> <Link to="/endereco" >Endereços</Link></li>
          <li> <Link to="/contato" >Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;