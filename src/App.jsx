import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Index';
import { Home } from './pages/Home';
import { Women } from './pages/Women';
import { Men } from './pages/Men';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Men" element={<Men/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
