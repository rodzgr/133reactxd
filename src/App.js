//import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Boliviana } from './components/boliviana';
import { AcercaDe } from './components/AcercaDe';
import { Mensajes } from './components/Mensajes';
import { Mexicana } from './components/mexicana';
import { Japonesa } from './components/japonesa';
import { Colombiana } from './components/colombiana';
import { Venezolana } from './components/venezolana';
import { Espanola } from './components/espanola';
import { Italiana } from './components/italiana';
import { China } from './components/china'; ///////////////////
import { Horarios } from './components/Horarios';
import { TiposDeComida } from './components/TiposDeComida';
import { Servicios } from './components/Servicios';
import { Faqs } from './components/Faqs';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/principal" element={<Home/>}/>
          <Route exact path="/boli" element={<Boliviana/>}/>
          <Route exact path="/mexi" element={<Mexicana/>}/>
          <Route exact path="/japo" element={<Japonesa/>}/>
          <Route exact path="/colom" element={<Colombiana/>}/>
          <Route exact path="/venez" element={<Venezolana/>}/>
          <Route exact path="/espa" element={<Espanola/>}/>
          <Route exact path="/ita" element={<Italiana/>}/>
          <Route exact path="/china" element={<China/>}/>

          <Route exact path="/acercade" element={<AcercaDe/>}/>
          <Route exact path="/mensajes" element={<Mensajes/>}/>
          <Route exact path="/horarios" element={<Horarios/>}/>
          <Route exact path="/tipos-comida" element={<TiposDeComida/>}/>
          <Route exact path="/servicios" element={<Servicios/>}/>
          <Route exact path="/faqs" element={<Faqs/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;