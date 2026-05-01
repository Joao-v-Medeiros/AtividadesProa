import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Escocia from './Components/Escocia'
import Aruba from './Components/Aruba'
import Muralha_da_china from './Components/Muralha_da_china'
import GrandCanyon from './Components/GrandCanyon'

function App() {

  return (
    <main>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Escocia' element={<Escocia />} />
            <Route path='/Aruba' element={<Aruba />} />
            <Route path='/Muralha_da_china' element={<Muralha_da_china />} />
            <Route path='/GrandCanyon' element={<GrandCanyon />} />
          </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
