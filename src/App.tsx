import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import MedicalSources from "./pages/MedicalSources";
import Contact from "./pages/Contact";
import DeleteAccount from "./pages/DeleteAccount";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/medical-sources" element={<MedicalSources />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
