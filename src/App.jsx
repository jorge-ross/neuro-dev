import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  )
}

export default App
