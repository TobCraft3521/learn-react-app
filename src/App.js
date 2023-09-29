import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Blog from './Blog';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About />} />
            <Route path='/blog/:id' element={<Blog/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
