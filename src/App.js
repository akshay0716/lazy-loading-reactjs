import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
    // <Switch>

    // </Switch>
  );
}

export default App;
