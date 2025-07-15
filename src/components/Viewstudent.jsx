import React, { useEffect, useState } from 'react'
import Navstudent from './Navstudent'
import axios from 'axios'





const Viewstudent = () => {
    const [students, changeStudents] = useState(
        { "status": "success", "data": [] }
    )
    const [isLoading, changeLoading] = useState(true)
    const fetchData = () => {
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response) => {
                changeLoading(false)
                changeStudents(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <Navstudent />
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
                                        {isLoading ? (
                                            <div class="d-flex justify-content-center align-items-center vh-100">
                                                <div class="spinner-border text-primary" style={{width: "4rem", height: "4rem", role: "status" , position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "white", zIndex: 9999}}>
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                                <p class="mt-3 fs-5 text-dark fw-semibold">Please Wait...</p>
                                            </div>
                                        ) : (
                                            <tbody>

                                                {students.data.map(
                                                    (value, index) => {
                                                        return (
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
                                        )}

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewstudent