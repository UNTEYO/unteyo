import "./App.css";
import CookieBanner from "./Components/Footer/CookieBanner";
import CookiePolicy from "./Components/Footer/CookiePolicy";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </HashRouter>
  );
}

export default App;
