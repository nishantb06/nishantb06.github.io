import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Homepage";
import PrototypesPage from "./pages/Prototypes";
import PrototypeDetail from "./pages/PrototypeDetail";
import BlogDetails from "./components/BlogDetails";
import Writings from './components/Writings';
import React from 'react';
import { BlogProvider } from './context/BlogContext';
import Newspaper from "./pages/Newspaper";
import RayTracer from "./pages/RayTracer";

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="App">
          <div className="container">
            <Navbar />
            <div className="content">
              <Routes>
                <Route exact path="/website" element={<HomePage />} />
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/writings" element={<Writings />} />
                <Route path="/writings/blogs/:slug" element={<BlogDetails />} />
                <Route path="/writings/tags/:tag" element={<Writings />} />
                <Route path="/prototypes" element={<PrototypesPage />} />
                <Route path="/prototypes/:id" element={<PrototypeDetail />} />
                <Route path="/prototypes/newspaper" element={<Newspaper />} />
                <Route path="/prototypes/ray-tracer" element={<RayTracer />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;
