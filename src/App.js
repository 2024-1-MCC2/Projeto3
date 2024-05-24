import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Prefeitura from './Pages/Prefeitura'
import Escolas from './Pages/Escolas'
import Inscricoes from './Pages/Inscricao'
import Projetos from './Pages/Projetos'
import Faq from './Pages/Faq'
import GlobalStyles from './styles/GlobalStyle'
import InfoEscolas from './Pages/InfoEscolas'

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prefeitura" element={<Prefeitura />}/>
        <Route path="/escolas" element={<Escolas />}/>
        <Route path="/infoEscolas" element={<InfoEscolas/>}/>
        <Route path="/inscricao" element={<Inscricoes />}/>
        <Route path="/projetos" element={<Projetos />}/>
        <Route path="/faq" element={<Faq />}/>
      </Routes>
    </Router>
  )
}

export default App;
