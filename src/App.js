import { Route, Routes } from 'react-router-dom'
import './App.css';
import Transacoes from './pages/Transacoes';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header>My Finance</Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transacoes' element={<Transacoes />} />
      </Routes>
      <Footer>Direitos Reservados - Luiz Bernardi   </Footer>
    </div>
  );
}

export default App;
