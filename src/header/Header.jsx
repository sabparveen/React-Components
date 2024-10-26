import { Icon } from '@iconify/react';
import "./header.css"
import React from 'react'

const Header = () => {
    return (

        <>
            <div className="bg-img">
                <nav className="container navbar navbar-expand-lg">
                    <div className="container-fluid mt-5">
                        <a className="navbar-brand text-white" href="#">MNTN</a>
                        <button
                            className="navbar-toggler text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bolder" href="#equipment">Equipment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bolder" href="#about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bolder" href="#blog">Blog</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white fw-bolder" href="#account"><Icon className='fs-3 me-3' icon="codicon:account" />Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="d-flex flex-column justify-content-center align-items-center my-5 mt-5 pt-5 text-white">

                    <h1 className="display-4 mb-4"><h6 className=' text-warning'><Icon className='me-2 fs-3' icon="pepicons-pencil:line-x" />A Hiking guide</h6>Be prepared for the <br /> Mountains and beyond!
                        <p className="text-start fs-6 mt-2 display-1">Scroll down <Icon className='fs-3' icon="solar:arrow-down-outline" /></p></h1>

                </div>


            </div>

            
        </>

    )
}

export default Header