import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unteyo" element={<MainLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
