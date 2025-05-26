import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import About from "./pages/About";

// const Home = lazy(() => import("./pages/Home"));
// const Services = lazy(() => import("./pages/Services"));
// const Contact = lazy(() => import("./pages/Contact"));
// const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
