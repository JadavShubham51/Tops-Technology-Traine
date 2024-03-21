import React from 'react';
import{
    Link,
}from "react-router-dom";


function Navbar(props) {
    {

    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img src="img/Dropbox-logo.svg" alt="" />
                    <a class="navbar-brand fw-bolder fs-4" href="#">Dropbox</a>
                    <li class="n">
                        <a class=" fs-5 mx-1" aria-current="page" href="#">Sign up</a>
                    </li>
                    <li class="n">
                        <a class="fs-5 mx-1" aria-current="page" href="#">Login</a>
                    </li>
                    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="modal" data-bs-target="#myModal">
                        <span class="navbar-toggler-icon" ></span>
                    </button>
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open modal
                    </button> */}



                    <div class="modal" id="myModal">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">


                                <div class="modal-header">
                                    <h4 class="modal-title">
                                    <img src="img/Dropbox-logo.svg" alt="" />
                                    <a class="navbar-brand fw-bolder fs-4" href="#">Dropbox</a>
                                    </h4>
                                    <ul className='d-flex nav1 mx-auto '>
                                        <li className='mx-4 mt-2'><a href="#">Sign up</a></li>
                                        <li className='mt-2'><a href="#">Login</a></li>
                                    </ul>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <div class="modal-body">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Why Dropbox?
                                            </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="navv">
                                            <div className="why">
                                                <div className="overview">
                                                    <ul>
                                                        <li className='fw-bold'>Overview</li>
                                                        <li><a href="#">Get inspired</a></li>
                                                        <li><a href="#">What customers say</a></li>
                                                        <li><a href="#">App integrations</a></li>
                                                        <li><a href="#">Resources</a></li>
                                                    </ul>
                                                </div>
                                                <div className="better">
                                                    <ul>
                                                        <li className='fw-bold'>Better with Dropbox</li>
                                                        <li><a href="#">Share files</a></li>
                                                        <li><a href="#">Store and organize</a></li>
                                                        <li><a href="#">Sync your devices</a></li>
                                                        <li><a href="#">Protect and secure data</a></li>
                                                        <li><a href="#">Connect remote teams</a></li>
                                                        <li><a href="#">Keep work moving</a></li>
                                                        <li><a href="#">Always-on backup</a></li>
                                                        <li><a href="#">Sign a document</a></li>
                                                        <li><a href="#">Track document analytics</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                Products
                                            </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="navv">
                                        <ul className='product2'>
                                            <h6>Do more than store with Dropbox</h6>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Dropbox-logo.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Dropbox</h6>
                                                        <span>Store Share, and access files across devices</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Backup-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Backup</h6>
                                                        <span>Automatically back up your devices</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/dropbox-sign-logo.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Sign</h6>
                                                        <span>Request and add signatures to documents</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/DocSend-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>DocSend</h6>
                                                        <span>Send documents securely and track activity</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Capture-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Capture</h6>
                                                        <span>Create screen recordings and video messages</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/replay-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Replay</h6>
                                                        <span>Review and approve videos faster</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <i class="fa-solid fa-arrow-right fs-3 ms-2"></i>
                                                    <div className="info mx-3">
                                                        <h6>Advance access</h6>
                                                        <span>Preview new product ecperiences</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Solutions
                                            </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="navv">
                                        <div className="why">
                                            <div className="overview">
                                                <ul>
                                                    <li className='fw-bold'>Roles</li>
                                                    <li><a href="#">Creatives</a></li>
                                                    <li><a href="#">Sales</a></li>
                                                    <li><a href="#">Marketing</a></li>
                                                    <li><a href="#">HR</a></li>
                                                    <li><a href="#">IT</a></li>
                                                    <li><a href="#">Team Lead</a></li>
                                                    <li><a href="#">Personal</a></li>
                                                </ul>
                                            </div>
                                            <div className="better">
                                                <ul>
                                                    <li className='fw-bold'>Industries</li>
                                                    <li><a href="#">Construction</a></li>
                                                    <li><a href="#">Technology</a></li>
                                                    <li><a href="#">Manufacturing</a></li>
                                                    <li><a href="#">Media</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <ul className='price me-5'>
                                            <li className='me-5'><a href="#">Pricing</a></li>
                                        </ul>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Contact
                                            </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="navv">
                                        <div className="why">
                                            <div className="overview">
                                                <ul>
                                                    <li className='fw-bold'>Support</li>
                                                    <li><a href="#">Help center</a></li>
                                                    <li><a href="#">Community forums</a></li>
                                                </ul>
                                            </div>
                                            <div className="better">
                                                <ul>
                                                    <li className='fw-bold'>Conatact sales</li>
                                                    <li><a href="#">Email</a></li>
                                                    <li><a href="#">+1855-237-6726</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Get app
                                            </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <div className="navv">
                                        <div className="why">
                                            <div className="better">
                                                <ul>
                                                    <li><Link to={'/Desktop'}>Desktop App</Link></li>
                                                    <li><Link to={'/Mobile'}>Mobile App</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                            </div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>


                                <div class="modal-footer">
                                    <button class="btn btn-primary rounded-0 mx-1 w-100" type="submit">Get Started <i class="fa-solid fa-arrow-right ms-3"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav na me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Why Dropbox?
                                    <div className="navh">
                                        <div className="why">
                                            <div className="overview">
                                                <ul>
                                                    <li className='fw-bold'>Overview</li>
                                                    <li><a href="#">Get inspired</a></li>
                                                    <li><a href="#">What customers say</a></li>
                                                    <li><a href="#">App integrations</a></li>
                                                    <li><a href="#">Resources</a></li>
                                                </ul>
                                            </div>
                                            <div className="better">
                                                <ul>
                                                    <li className='fw-bold'>Better with Dropbox</li>
                                                    <li><a href="#">Share files</a></li>
                                                    <li><a href="#">Store and organize</a></li>
                                                    <li><a href="#">Sync your devices</a></li>
                                                    <li><a href="#">Protect and secure data</a></li>
                                                    <li><a href="#">Connect remote teams</a></li>
                                                    <li><a href="#">Keep work moving</a></li>
                                                    <li><a href="#">Always-on backup</a></li>
                                                    <li><a href="#">Sign a document</a></li>
                                                    <li><a href="#">Track document analytics</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Products
                                    <div className="navh pt-3">
                                        <ul className='product2'>
                                            <h6 className='text-center'>Do more than store with Dropbox</h6>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Dropbox-logo.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Dropbox</h6>
                                                        <span>Store Share, and access files across devices</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Backup-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Backup</h6>
                                                        <span>Automatically back up your devices</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/dropbox-sign-logo.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Sign</h6>
                                                        <span>Request and add signatures to documents</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/DocSend-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>DocSend</h6>
                                                        <span>Send documents securely and track activity</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/Capture-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Capture</h6>
                                                        <span>Create screen recordings and video messages</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <img src="img/replay-logo-nav.svg" alt="" />
                                                    <div className="info">
                                                        <h6>Replay</h6>
                                                        <span>Review and approve videos faster</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="product1">
                                                    <i class="fa-solid fa-arrow-right fs-3 ms-2"></i>
                                                    <div className="info mx-3">
                                                        <h6>Advance access</h6>
                                                        <span>Preview new product ecperiences</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" href="#" aria-disabled="true">Solutions
                                    <div className="navh">
                                        <div className="why">
                                            <div className="overview">
                                                <ul>
                                                    <li className='fw-bold'>Roles</li>
                                                    <li><a href="#">Creatives</a></li>
                                                    <li><a href="#">Sales</a></li>
                                                    <li><a href="#">Marketing</a></li>
                                                    <li><a href="#">HR</a></li>
                                                    <li><a href="#">IT</a></li>
                                                    <li><a href="#">Team Lead</a></li>
                                                    <li><a href="#">Personal</a></li>
                                                </ul>
                                            </div>
                                            <div className="better">
                                                <ul>
                                                    <li className='fw-bold'>Industries</li>
                                                    <li><a href="#">Construction</a></li>
                                                    <li><a href="#">Technology</a></li>
                                                    <li><a href="#">Manufacturing</a></li>
                                                    <li><a href="#">Media</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" href="#" aria-disabled="true">Pricing</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav na mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Contact
                                    <div className="navc">
                                        <div className="why">
                                            <div className="overview">
                                                <ul>
                                                    <li className='fw-bold'>Support</li>
                                                    <li><a href="#">Help center</a></li>
                                                    <li><a href="#">Community forums</a></li>
                                                </ul>
                                            </div>
                                            <div className="better">
                                                <ul>
                                                    <li className='fw-bold'>Conatact sales</li>
                                                    <li><a href="#">Email</a></li>
                                                    <li><a href="#">+1855-237-6726</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Get app
                                    <div className="navc">
                                        <div className="why">
                                            <div className="better">
                                                <ul>
                                                    <li><Link to={'/Desktop'}>Desktop App</Link></li>
                                                    <li><Link to={'/Mobile'}>Mobile App</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Sign up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fs-5 mx-1" aria-current="page" href="#">Login</a>
                            </li>
                            <button class="btn btn-primary rounded-0 mx-1" type="submit">Get Started <i class="fa-solid fa-arrow-right ms-3"></i></button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;