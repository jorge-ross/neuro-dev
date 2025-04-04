import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import PsychServices from './routes/psych-services'
import NeuroServices from './routes/neuro'
import ConsultancyServices from './routes/consultancy'
import Blog from './routes/blog'
import ArticleDetail from './routes/a1'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="jorge-ros-acerca-de-neurodev" element={<About />} />
        <Route path="psicologia" element={<PsychServices />} />
        <Route path="neuropsicologia" element={<NeuroServices />} />
        <Route path="consultoria" element={<ConsultancyServices />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
      </Routes>
    </Router>
  )
}

export default App
