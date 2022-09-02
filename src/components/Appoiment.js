import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import "../index.css";




const Appoiment = () => {
    const [data, setData] = useState([]);




    useEffect(() => {
        const getLocalValues = JSON.parse(localStorage.getItem("sheduleinfo"));
        setData(getLocalValues);
    }, [])

    const deleteItems = (index) => {
        let getLocalValues = [...JSON.parse(localStorage.getItem("sheduleinfo"))];
        // console.log("delete table dta",getLocalValues, index)
        let newArray=[];
        if(getLocalValues && getLocalValues?.length > 0){
           getLocalValues.splice(index, 1)
        }
       
        localStorage.setItem('sheduleinfo',  JSON.stringify(getLocalValues))
        setData(getLocalValues)

    }

    return (
    <>
    <Navbar />
    
        <div className="student-wrap">
            <div className="text-wrap">
                <span className="span-1"><h3 style={{ fontSize: "50px" }}>Appoiment  Details</h3></span>
                <Link to="/createAppoint" className="btn btn-success">Add Appoiment</Link>
            </div>


            <div className='table-wrap'>
                <table style={{ width: '80%', border: '2px solid black', marginLeft: '360px', marginTop: '100px', dispay: 'flex' }}>
                    <thead>
                        <tr className='table-heading'>
                            <th>Sr.No</th>
                            <th>MeetingTitle</th>
                            <th>MeetingRoom</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th> Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            data?.length > 0 &&
                            data?.map((_data, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{_data?.MeetingTitle}</td>
                                    <td>{_data?.MeetingRoom}</td>
                                    <td>{_data?.name}</td>
                                    <td>{_data?.Phone}</td>
                                    <td>{_data?.date}</td>
                                    <td><button className='appoi-submit-btn' onClick={()=> { deleteItems(index) }}>delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        <Footer/>
        </>
    )

}

export default Appoiment;