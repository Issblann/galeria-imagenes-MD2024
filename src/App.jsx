import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </>
  )
}

export default App;
