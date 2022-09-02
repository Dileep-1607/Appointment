import React, { useState } from 'react'

import Navbar from './Navbar'

const Learn = () => {
    const [username, setUsername] = useState()
    const [number, setNumber] = useState()
    const [age, setAge] = useState()
    const [date, setDate] = useState()
    const [users, setMydata] = useState([]);

  const submitData = ()=>{
    // console.log(username, age, number, date);
     const data = {username, age, date, number};
     users.push(data);
     localStorage.setItem('Userlist', JSON.stringify(data));

  }

    return (
        <>
            <Navbar />
             <div className='container'>
                <div>
                    <h1> Schedule Appointment</h1>

                    <form className='appointment-form' >
                        <input type='text' value={username} name='username' onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter your name:' />
                        <input type='number' value={number} name='number' onChange={(e)=>{setNumber(e.target.value)}} placeholder='Enter your Contact no.:' />
                        <input type='number' value={age} name='age' onChange={(e)=>{setAge(e.target.value)}} placeholder='Enter your Age: ' />
                        <input type='date' value={date} name='date' onChange={(e)=>{setDate(e.target.value)}} placeholder='Select Time: ' />
                        <button type='button' onClick={submitData} >Add Appointment</button>

                    </form>
                </div>

                <div className='booked'>
                  <h1>Booked Appointment</h1>
                  <table>
                    <thead>
                        <th>Name:</th>
                        <th>Number: </th>
                        <th>Age</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                   
                       {
                        users.map((user)=>
                        <tr>
                        <td>{user.username}</td>
                        <td>{user.number}</td>
                        <td>{user.age}</td>
                        <td>{user.date}</td>
                    </tr>
                        )

                        
                       }

                    </tbody>
                  </table>
                </div>

            </div>


        </>
    )

}
export default Learn;