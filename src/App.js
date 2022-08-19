import './App.css';

import Home from './components/Home';
import Navbar  from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Product from './components/Product';
import AddCart from './components/AddCart';
import Thankyou from './components/Thankyou';
import MyOrder from './components/MyOrder';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';
import SearchProduct from './components/SearchProduct';
import AddProduct from './components/AddProduct';
import About from './components/About';
import Contact from './components/Contact';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
function App() {
  return (
    <>
      <Navbar/>
      <ToastContainer autoClose={5000}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/products/:id" element={<Products/>}/>
        <Route exact path="/cart" element={<AddCart/>}/>
         <Route exact path="/thankyou" element={<Thankyou/>}/>
         <Route exact path="/myorder" element={<MyOrder/>}/>
         <Route exact path="/addProduct" element={<AddProduct/>}/>
         <Route exact path="/updateProduct" element={<UpdateProduct/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/searchProduct/:query" element={<SearchProduct/>}/>
      </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
