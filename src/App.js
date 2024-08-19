import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Homepage";
import WritingsPage from "./pages/Writings";
import PrototypesPage from "./pages/Prototypes";
import BlogDetails from "./components/BlogDetails";
// import About from './components/About';
// import Writings from './components/Writings';
// import Prototypes from './components/Prototypes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/website" element={<HomePage />}></Route>
              <Route path="/about" element={<HomePage />}></Route>
              <Route path="/writings" element={<WritingsPage />}></Route>
                {/* <Route path="/blogs/:slug" element={<BlogDetails />} /> */}
              <Route path="/prototypes" element={<PrototypesPage />}></Route>
              <Route path="/writings/blogs/:slug" element={<BlogDetails />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
