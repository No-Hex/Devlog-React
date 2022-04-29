import { Route, Routes } from "react-router-dom";
import { Navbar, NavbarAdmin, Footer } from "./Components";
import { Home, Developments, Projects, Admin, AdminArticles, AdminProjects, ErrorPage, Login } from './Pages'
import { useAdminPath } from "./hooks/useAdminPath";

function App() {
  const isAdminPath = useAdminPath();

  return (
    <div className=" lg:mx-36 sm:mx-8 md:mx-16 h-screen flex justify-between flex-col">
      <div>
        {isAdminPath ? <NavbarAdmin /> : <Navbar />}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/projects" element={<Projects />} />
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/articles" element={<AdminArticles />} />
          <Route path="/admin/projects" element={<AdminProjects />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
