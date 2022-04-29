import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { Home, Developments, Projects } from './Container'

function App() {
  return (
    <BrowserRouter>
      <div className=" lg:mx-36 sm:mx-8 md:mx-16 h-screen flex justify-between flex-col">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="developments" element={<Developments />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<div><h4 className="text-gray-200 text-7xl">404 Page not found</h4></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
