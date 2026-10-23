import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

// COMPONENTS
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div
      className="whole-website-container min-h-screen pt-20"
      onClick={() => {
        showMenu ? setShowMenu(false) : null;
      }}
    >
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/project/:projId" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="contact flex items-center justify-between">
        <p>We Are the Leading Architectural Carpenter Company</p>
        <Link to="/contactus" className="uppercase">
          contact us now
        </Link>
      </div>

      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default App;
