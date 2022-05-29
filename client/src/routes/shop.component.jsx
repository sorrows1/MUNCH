
import { Routes, Route } from 'react-router-dom';

import Products from '../components/shop/products.component';


const Shop = () => {
    return ( 
    <Routes>
      <Route index element={<Products />} />
      {/* <Route path='product'>
      <Route path=':id' element={} />
      </Route> */}
    </Routes>
    );
}
 
export default Shop;