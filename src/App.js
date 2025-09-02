import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LuxembourgTrip from "./components/LuxembourgTrip";

function AppContent() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();
  
  // Check if current route is Luxembourg
  const isLuxembourgRoute = location.pathname === '/luxembourg';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className={isLuxembourgRoute ? "Luxembourg-App" : "App"} 
           id={load ? "no-scroll" : "scroll"}>
        
        {/* Conditionally render Navbar */}
        {!isLuxembourgRoute && <Navbar />}
        
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/luxembourg" element={<LuxembourgTrip />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Conditionally render Footer */}
        {!isLuxembourgRoute && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
