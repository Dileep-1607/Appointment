import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = ()=>{

     const data =localStorage.getItem('dileep');
       console.log(data)

  return(
    <div>
     <Navbar />
        <h1>This is  Home page component </h1>

        <Footer/>
    </div>
  )
}

export default Home;