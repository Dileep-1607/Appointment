import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

 
const Register = () =>{

  const history = useNavigate();
  
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: ""
})

const [data,setData] = useState([]);

    const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }

  const addData = (e) => {
    e.preventDefault();
    
    const { name, email, password } = inpval;

    if (name === "") {
        alert(' name field is requred!',{
            position: "top-center",
        });
    } else if (email === "") {
      alert('email field is requred',{
            position: "top-center",
        });
    } else if (!email.includes("@")) {
         alert('plz enter valid email addres',{
            position: "top-center",
        });
    } 
     else if (password === "") {
      alert('password field is requred',{
            position: "top-center",
        });
    } else if (password.length < 5) {
      alert('password length greater five',{
            position: "top-center",
        });
    } else {
     
        history("/")
        
        localStorage.setItem("dileep",JSON.stringify([...data,inpval]));
        alert("Register succesfully")
    }
    

}

    return(
      <>
     
     <br></br>
     <br></br>
     <br></br>

     <div className='App-header'>
      <form className='login-form'>
        <h3>Username: </h3>
        <input type='text' name='name' onChange={getdata} placeholder='Username' required />
        <h3>Email: </h3>
        <input type='email' name='email'  onChange={getdata} placeholder='Email' required/>
        <h3>Password: </h3>
        <input type='password' name='password'  onChange={getdata} placeholder='Password' required/>
        <button type='button' className='login-btn' onClick={addData}>Register</button>

      </form>
        <h2> 
        if You have already account: 
        <button className='down-login-register-btn' onClick={()=>{history('/')}}>Login</button>
        </h2>
        </div>
        
      </>
    )
}

export default Register;