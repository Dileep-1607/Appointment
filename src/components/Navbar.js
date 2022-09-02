import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const history = useNavigate();
    const status = localStorage.getItem('loginStatus');

    const logout = () => {
        localStorage.setItem('loginStatus', false);
        history('/');
    }

    return (
        <>
            <ul className='nav-links'>


                {

                    status ?
                        <>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/appointment'>Appoiment</Link></li>
                            {/* <li><Link to='/createAppoint'>Create Appointment</Link></li> */}
                            <li onClick={logout}>Logout</li>
                        </>
                        :
                        <>
                            <li><Link to='/'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                }




            </ul>
        </>
    )
}

export default Navbar;