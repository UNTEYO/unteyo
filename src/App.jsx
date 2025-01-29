import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unteyo" element={<MainLanding />} />
        <Route path="/unteyo/privacy&policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
