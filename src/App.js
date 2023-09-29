import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Blog from './Blog';
import NotFound from './NotFound';
import Cookies from 'universal-cookie';
import { useState } from 'react';

function App() {
  const cookies = new Cookies();
  let cssVars

  const [appearence,setAppearence] = useState("light")

  if (cookies.get("appearence") === "dark") {
    cssVars = {
      "--background": "#141414",
      "--nav": "#1b1b1b",
      "--text": "#ffff"
    }
  }

  const handleAppearenceSwitch = () => {
    if (cookies.get("appearence") === "dark") {
      cookies.set("appearence", "light")
      cssVars = {
        "--background": "#fff",
        "--nav": "#fff",
        "--text": "#333"
      }
      setAppearence("light")
    } else {
      cookies.set("appearence", "dark")
      cssVars = {
        "--background": "#141414",
        "--nav": "#1b1b1b",
        "--text": "#ffff"
      }
      setAppearence("dark")
    }
  }

  return (
    <BrowserRouter>
      <div className="App" style={cssVars}>
        <Navbar handleAppearenceSwitch={handleAppearenceSwitch} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path='/blog/:id' element={<Blog />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
