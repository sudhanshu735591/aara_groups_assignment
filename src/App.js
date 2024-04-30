import Home from './Component/Home/Home';
import SingleData from './Component/singleData/singleData';
import logo from './logo.svg';

import {  Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/singleData' element={<SingleData/>}/>

      </Routes>
      </BrowserRouter>
  );
}

export default App;
