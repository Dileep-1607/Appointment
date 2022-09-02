import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom'
 
const Login = () =>{
   const history = useNavigate();

   const [inpval, setInpval] = useState({
    email: "",
    password: ""
})


const getData = (e) => {
  // console.log(e.target.value);

  const { value, name } = e.target;


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

              localStorage.setItem("user_login", JSON.stringify(userlogin))
              localStorage.setItem("loginStatus", true);
              history("/home")
          }
      }
  }

}

    return(

      <> 
      <br></br>
      <br></br>
      <br></br>
 <div className='App-header'>
        <form  className='login-form ' >
          <h3>Enter Email</h3>
          <input type='email' placeholder='Email'  name='email' onChange={getData}  />

          <h3>Enter Password</h3>
          <input type='password' placeholder='password' name='password' onChange={getData}  />

          <button type='button' className='login-btn' onClick={addData}>Login</button>
        </form>
        <h2>  
          you haven't account:  
        <button className='down-login-register-btn' onClick={()=>{history('/register')}}>Register</button>
        </h2>
        </div>
      </>
    )
}

export default Login;