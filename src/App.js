import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './components/Login';

import Register from './components/Register';
import Home from './components/Home';
import Error from './components/Error';
import Appointment from './components/Appoiment';
import CreateAppoint from './components/CreateAppoint'
import Footer from './components/Footer';


function App() {



  return (
    <div>

      <BrowserRouter>
      
        <Routes>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/appointment' element={<Appointment />} ></Route>
          <Route path='/createAppoint' element={<CreateAppoint />} ></Route>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/footer' element={<Footer />} ></Route>
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
