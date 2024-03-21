import React from 'react';

function Slider(props) {
    return (
        <>
           <div className="container-fluied sliders p-5 text-white">
            <h2 className='text-center'>Trusted by over 700 million registered <br /> users and 600,000 teams</h2>
            <p className='text-center mt-3'><a href="#" >Learn more about partner integrations</a></p>
                <div className="container my-5">
                    <div className="row">
                        <div className="col">

                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="main slide1 d-flex">
                                        <img src="img/slide1.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Mary Ashley Krogh (MAK), Illustrator and Graphic Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide2 d-flex">
                                        <img src="img/slide2.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Dropbox increased our team's collaboration while working from home, which has increased our flexibility and could revolutionize our office culture.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Adam Montgomery, Senior Manager of Programming, Sundance Film Festival</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide3 d-flex">
                                        <img src="img/silde3.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“We're a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it helps professionalize our organization.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Ann Kappes, Director of Art Partnerships at Creativity Explored</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide4 d-flex">
                                        <img src="img/slide4.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Dropbox easily allows me to transfer what's in my mind to another person.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Murray Bell, Founder and Executive Creative Director of Semi Permanent</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide5 d-flex">
                                        <img src="img/slide5.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Our team is working remotely—everyone's in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Sophia Chang, Illustrator and Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide6 d-flex">
                                        <img src="img/slide6.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Dropbox version control is very important. You may want to go back to an earlier version because there's an idea in there that you really like.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Sahir Zaveri, CEO of King Children</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div className="main slide7 d-flex">
                                        <img src="img/silde7.webp" class="d-block w-50" alt="" />
                                        <div className="info w-50 p-4 position-relative">
                                            <p className='info1'>“Creative growth happens when you dont have to worry about managing storage.”</p>
                                            <a href="#">Read the full story</a>
                                            <p className='position-absolute p-4 bottom-0 start-0'>Andi Scull, Founder and Creative Director, HOPE Organization</p>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col slideri d-flex justify-content-between mt-5">
                            <h1 className='fs-1 fw-bold'>For all things worth sharing.</h1>
                            <button class="btn btn-primary rounded-0 mx-5 p-4 px-5 text-dark fs-5" type="submit">Refer a Friend <i class="fa-solid fa-arrow-right ms-5"></i></button>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Slider;