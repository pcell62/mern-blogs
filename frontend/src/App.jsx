import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import FooterComp from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="max-w-[88rem] m-auto"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <FooterComp />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
