
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Studentdesc = () => {

  const navigate = useNavigate()
  const [formvar, setformvar] = useState({
    MeetingTitle: "",
    MeetingRoom: "",
    name: "",
    Phone: "",
    date: "",
    id:new Date().toISOString()
  })



  function schedule(e) {
    const { name, value } = e.target;

    setformvar({
      
        ...formvar,
          [name]: value
 
      
    })


  }
  const schedulesubmit = (e) => {
    e.preventDefault();

    let localValues = JSON.parse(localStorage.getItem('sheduleinfo'));
    let array = localValues || [];
    array.push(formvar)
    //  console.log(array,'Priya')
    localStorage.setItem("sheduleinfo", JSON.stringify(array));
    navigate('/appointment');
    



  }
 
  return (
    <>
    <Navbar />
      <div className='fix-appoiment'>
        <h1 className='zoom-meeting'>Schedule a Zoom Meeting Form</h1>

        <hr></hr>
        <div className='dropdown'>


          <h5>Meeting Title :</h5>
          <input required type="text" name="MeetingTitle" style={{width: "300px",borderRadius:"5px"}} onChange={schedule}  ></input>


          <h5>Meeting Room :</h5>
          <select id="select" name='MeetingRoom' style={{width: "300px",borderRadius:"5px"}} onChange={schedule} >
            <option required value="" >--Please choose an option--</option>
            <option value="Room1">Room1</option>
            <option value="Room2">Room2</option>
            <option value="Room3">Room3</option>
            <option value="Room4">Room4</option>
            <option value="Room5">Room5</option>
          </select>


          <hr></hr>

        </div>


        <div >
          <h5>Enter name</h5>
          <input required type="text" style={{width: "200px",borderRadius:"5px"}} placeholder='Enter name' id='name' name='name' onChange={schedule}></input>  </div><br></br>
        <div>
          <h5>Enter Phone No.</h5>
          <input required type="tel" style={{width: "200px",borderRadius:"5px"}} placeholder='Phone no.' id='number' name="Phone" onChange={schedule} ></input>
        </div><br></br>
        <div>
          <h5>Enter Date</h5>
          <input required type="date" style={{width: "200px",borderRadius:"5px"}} placeholder='date' id='date' name='date' onChange={schedule}></input>
        </div><br></br>
        <div>
          {/* <button className='appoiment-fix-btn' onClick={schedule}>Submit</button> */}
          <button className='appoiment-fix-btn' onClick={schedulesubmit}>Submit</button>

        </div>


      </div>
    
    <Footer/>
    </>
  )
}

export default Studentdesc;