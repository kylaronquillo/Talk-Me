import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "regenerator-runtime/runtime";

// components
import Welcome from "./components/Welcome";
import About from "./components/About";
import Speak from "./components/Speak";
import Notes from "./components/Notes";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="speak" element={<Speak />} />
          <Route path="notes" element={<Notes />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
