import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login';
import Learn from './components/Learn';
import Register from './components/Register';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';


function App() {



  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} />
          <Route path='/learn' element={<Learn name="dileep" />} />
          <Route path='*' element={<Error />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
