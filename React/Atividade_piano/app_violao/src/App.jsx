import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import QuemSomos from './components/QuemSomos'; 
import Instrumentos from './components/Instrumentos';
import Endereco from './components/Endereco';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  

  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<QuemSomos />} /> 
          <Route path="/instrumentos" element={<Instrumentos />} />
          <Route path="/endereco" element={<Endereco />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
