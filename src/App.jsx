import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NewMovie from "./pages/NewMovie";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LookPage from "./pages/LookPage";
import Help from "./pages/Help"; // The other FAQ/help page
import Faqs from "./pages/Faqs"; // Your custom FAQ accordion page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-movie" element={<NewMovie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/look" element={<LookPage />} />
        {/* FAQ/Help routes */}
        <Route path="/faqs" element={<Faqs />} /> {/* custom accordion FAQ */}
        <Route path="/help" element={<Help />} />{" "}
        {/* Help page using UI Accordion */}
      </Routes>
    </Router>
  );
}

export default App;
