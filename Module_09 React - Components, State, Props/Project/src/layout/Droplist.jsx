import React, { useState } from 'react';

function Droplist(props) {

    function showdata() {
        
        document.getElementById('first').style.cssText="left:0%;opacity:1";

        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";

    }

    function showdata1() {
        document.getElementById('second').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";


    }
    function showdata2() {
        document.getElementById('third').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";
       

    }
    function showdata3() {
        document.getElementById('four').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";
       

    }
    function showdata4() {
        document.getElementById('five').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";
       

    }
    function showdata5() {
        document.getElementById('six').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";
       

    }
    function showdata6() {
        document.getElementById('seven').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
        document.getElementById('eight').style.cssText="left:100%;opacity:0";
       

    }
    function showdata7() {
        document.getElementById('eight').style.cssText="left:0%;opacity:1";

        document.getElementById('first').style.cssText="left:100%;opacity:0";
        document.getElementById('second').style.cssText="left:100%;opacity:0";
        document.getElementById('third').style.cssText="left:100%;opacity:0";
        document.getElementById('five').style.cssText="left:100%;opacity:0";
        document.getElementById('six').style.cssText="left:100%;opacity:0";
        document.getElementById('seven').style.cssText="left:100%;opacity:0";
        document.getElementById('four').style.cssText="left:100%;opacity:0";
       

    }


    
    return (
        
        <>
            <div className="container-fluied py-4 dropbox">
                <h1 className='text-center p-2'>What else can Dropbox help you do?</h1>
                <p className='text-center p-1'>Dropbox brings everything—traditional files, cloud content, and web shortcuts—together in one place.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item " onClick={showdata}>
                                        <h2 class="accordion-header" id="flush-headingOne" >
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="flase" aria-controls="flush-collapseOne">
                                            Get 2 GB of cloud storage for free with Dropbox Basic
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you- get a free account, no strings attached!</div>
                                            <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>    
                                    </div>
                                    <div class="accordion-item" onClick={showdata1}>
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Dropbox Plus has room for all your content with space to spare
                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item"  onClick={showdata2}>
                                        <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Dropbox Family is a place for everyone with space for everything
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item"  onClick={showdata3}>
                                        <h2 class="accordion-header" id="flush-headingFour">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Make life easier for you and your clients with Dropbox Professional
                                        </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item"  onClick={showdata4}>
                                        <h2 class="accordion-header" id="flush-headingFive">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                            Streamline your document workflow with Dropbox Sign
                                        </button>
                                        </h2>
                                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Save yourself time and hassle with Dropbox Sign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item" onClick={showdata5}>
                                        <h2 class="accordion-header" id="flush-headingSix">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        Centralize, secure, and easily access your work with Dropbox Standard
                                        </button>
                                        </h2>
                                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item" onClick={showdata6}>
                                        <h2 class="accordion-header" id="flush-headingSeven">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        DocSend lets you track, analyze, and optimize your content
                                        </button>
                                        </h2>
                                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                                    <div class="accordion-item" onClick={showdata7}>
                                        <h2 class="accordion-header" id="flush-headingEight">
                                        <button class="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                                        Proactively detect threats to your team's content with Dropbox Advanced
                                        </button>
                                        </h2>
                                        <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan.</div>
                                        <a href="#" className='ms-4 text-dark fw-bold'>Learn More</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 bg-dark d-flex align-items-center  w-50 justify-content-center listd">
                            {/* <p id='first'></p> */}
                            <img id='first' className='p-5' src="img/first.webp" alt="" />
                            <img id='second' className='p-5' src="img/second.webp" alt="" />
                            <img id='third' className='p-5' src="img/third.webp " alt="" />   
                            <img id='four' className='p-5' src="img/four.webp " alt="" />   
                            <img id='five' className='p-5' src="img/five.webp " alt="" />   
                            <img id='six' className='p-5' src="img/six.webp " alt="" />   
                            <img id='seven' className='p-5' src="img/seven.svg " alt="" />   
                            <img id='eight' className='p-5' src="img/eight.webp " alt="" />   
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Droplist;