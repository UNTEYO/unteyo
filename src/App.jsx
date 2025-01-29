import "./App.css";
import CookieBanner from "./Components/Footer/CookieBanner";
import CookiePolicy from "./Components/Footer/CookiePolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/unteyo" element={<MainLanding />} />
        <Route path="/unteyo/privacy&policy" element={<PrivacyPolicy />} />
        <Route path="/unteyo/cookiepolicy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </Router>
  );
}

export default App;
