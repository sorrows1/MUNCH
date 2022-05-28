import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation.component';
import Home from './routes/home.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
