import './App.css';
import AllProducts from './components/products/AllProducts.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/products/ProductDetails.jsx';
const App=()=> {
return (
  <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
  }
export default App;
