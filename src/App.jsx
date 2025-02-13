import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import PsychServices from './routes/psych-services'
import NeuroServices from './routes/neuro'
import ConsultancyServices from './routes/consultancy'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="sobre-neurodev" element={<About />} />
        <Route path="psicologia" element={<PsychServices />} />
        <Route path="neuropsicologia" element={<NeuroServices />} />
        <Route path="consultoria" element={<ConsultancyServices />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  )
}

export default App
