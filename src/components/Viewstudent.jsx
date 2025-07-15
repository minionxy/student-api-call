import React, { useEffect, useState } from 'react'
import Navstudent from './Navstudent'
import axios from 'axios'





const Viewstudent = () => {
    const [students,changeStudents]=useState(
       {"status":"success","data":[]}
    )
    
    const fetchData=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response)=>{
                changeStudents(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()}, [])


  return (
    <div>
        <Navstudent/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 align="center" className='text-primary'>VIEW STUDENT</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead className="table-dark">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Roll No</th>
                                                <th scope="col">Admission No</th>
                                                <th scope="col">College</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                         {students.data.map(
                                            (value,index)=>{
                                                return(
                                                    <tr>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.roll_number}</td>
                                                            <td>{value.admission_number}</td>
                                                            <td>{value.college}</td>
                                                        </tr>
                                                )
                                            }
                                         )}               

                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewstudent