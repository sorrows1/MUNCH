import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { getProductAll } from './app/products/products.action';

import { Navigation } from './routes/Navigation.component';
import Home from './pages/Home.component';
import Shop from './pages/Shop.component';
import Product from './pages/Product.component';
import ProductList from './pages/dashboard/ProductList.component';
import DashboardLayout from './components/dashboard';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAll());
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop'>
            <Route index element={<Shop />} />
            <Route path='product'>
              <Route path=':id' element={<Product />} />
            </Route>
          </Route>
          <Route path='dashboard' element={<DashboardLayout />}>
            <Route path='product'>
              <Route path='list' element={<ProductList />} />
            </Route>
            <Route path='sales'>
              <Route path='list' element={<ProductList />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
