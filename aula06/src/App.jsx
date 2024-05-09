import React from 'react'
import Inicial from './pages/Inicial'
import Afaculdade from './pages/Afaculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <img src='uniesp.png' width={50} height={50} />
      <Navbar />
      <br/><br/>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/a-faculdade' element={<Afaculdade />} />
        <Route path='/dpo-lgpd' element={<DpoLgpd />} />
        <Route path='/noticias' element={<Noticias />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App