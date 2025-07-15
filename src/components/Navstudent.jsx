import React from 'react'
import { Link } from 'react-router-dom'

const Navstudent = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                    <div class="container-fluid bg-secondary">
                                        <Link class="navbar-brand" to="/">STUDENT REGGG</Link>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <Link class="nav-link active" aria-current="page" to="/">ADD</Link>
                                                </li>
                                                <li class="nav-item">

                                                    <Link class="nav-link" to="/Search">SEARCH</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" to="/Delete">DELETE</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" to="/View">VIEW</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navstudent