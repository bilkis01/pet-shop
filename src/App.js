import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import ProductDetails from './component/ProductDetails';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Navbar from './component/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
