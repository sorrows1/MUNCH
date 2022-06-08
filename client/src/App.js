import { Routes, Route } from 'react-router-dom';

import { Navigation } from './routes/Navigation.component';
import Home from './pages/Home.component';
import Shop from './pages/Shop.component';
import Product from './pages/Product.component';
import { ProductList, CreateProduct, EditProduct } from './pages/dashboard/index';
import DashboardLayout from './components/dashboard';

function App() {

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
              <Route path=':id' element={<EditProduct />} />
              <Route 
                path='new'
                element={<CreateProduct  />}
              />
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
