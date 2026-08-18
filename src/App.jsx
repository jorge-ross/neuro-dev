import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./routes/home";
import About from "./routes/about";
import PsychServices from "./routes/psych-services";
import NeuroServices from "./routes/neuro";
import ConsultancyServices from "./routes/consultancy";
import PsicoMeet from "./routes/psicomeet-booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jorge-ros-acerca-de-neurodev" element={<About />} />
        <Route path="psicologia" element={<PsychServices />} />
        <Route path="neuropsicologia" element={<NeuroServices />} />
        <Route path="consultoria" element={<ConsultancyServices />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/agenda-tu-cita" element={<PsicoMeet />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
