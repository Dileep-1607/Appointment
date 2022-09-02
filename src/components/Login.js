import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
 
const Login = () =>{
   const history = useNavigate();

   const [inpval, setInpval] = useState({
    email: "",
    password: ""
})


const getData = (e) => {
  // console.log(e.target.value);

  const { value, name } = e.target;

  console.log(value,name);


  setInpval(() => {
      return {
          ...inpval,
          [name]: value
      }
  })

}

const addData = (e) => {
  e.preventDefault();

  const getuserArr = localStorage.getItem("dileep");
  console.log(getuserArr);

  const { email, password } = inpval;

  if (email === "") {
    alert('email field is requred', {
          // position: "top-center",
      });
  } else if (!email.includes("@")) {
    alert('plz enter valid email addres', {
         
      });
  } else if (password === "") {
    alert('password field is requred', {
          
      });
  } else if (password.length < 5) {
    alert('password length greater five', {
          
      });
  } else {

      if (getuserArr && getuserArr.length) {
          const userdata = JSON.parse(getuserArr);
          const userlogin = userdata.filter((el, k) => {
              return el.email === email && el.password === password
          });

          if (userlogin.length === 0) {
              alert("invalid details")
          } else {
              console.log("user login succesfulyy");

              localStorage.setItem("user_login", JSON.stringify(userlogin))
              localStorage.setItem("loginStatus", true);
              history("/home")
          }
      }
  }

}

    return(

      <> 
        <form  className='login-form'>
          <label>Enter Email</label>
          <input type='email'  name='email' onChange={getData}  />

          <label>Enter Password</label>
          <input type='password'  name='password' onChange={getData}  />

          <button type='button' onClick={addData}>Login</button>
        </form>
        <h2>  
          you haven't account:  
        <button onClick={()=>{history('/register')}}>Register</button>
        </h2>
      </>
    )
}

export default Login;