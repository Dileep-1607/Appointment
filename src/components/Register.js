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
    console.log(inpval);

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
     
      <form className='login-form'>
        <label>Username: </label>
        <input type='text' name='name' onChange={getdata} placeholder='Username' required />
        <label>Email: </label>
        <input type='email' name='email'  onChange={getdata} placeholder='Email' required/>
        <label>Password: </label>
        <input type='password' name='password'  onChange={getdata} placeholder='Password' required/>
        <button type='button' onClick={addData}>Register</button>

      </form>
        <h2> 
        if You have already account: 
        <button onClick={()=>{history('/')}}>Login</button>
        </h2>
        
        
      </>
    )
}

export default Register;