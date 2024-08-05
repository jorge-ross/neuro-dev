import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import Services from './routes/services'
import Contact from './routes/contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  )
}

export default App
