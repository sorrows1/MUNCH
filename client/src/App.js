import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Navigation } from './routes/navigation/navigation.component';

function App() {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/recipes`)
      .then((response) => response.data);
  });
  return (
    <Routes>
      <Route path='/' element={<Navigation />}></Route>
    </Routes>
  );
}

export default App;
