import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="container-fluied p-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 mt-lg-0 mt-4">
                            <h4 className='mb-4'>Dropbox</h4>
                            <p><a href="#">Desktop app</a></p>
                            <p><a href="#">Mobile app</a></p>
                            <p><a href="#">Integrations</a></p>
                            <p><a href="#">Features</a></p>
                            <p><a href="#">Solutions</a></p>
                            <p><a href="#">Do more than store</a></p>
                            <p><a href="#">Security</a></p>
                            <p><a href="#">Advance access</a></p>
                        </div>
                        <div className="col-lg-2 col-6  mt-lg-0 mt-4">
                            <h4 className='mb-4'>Products</h4>
                            <p><a href="#">Plus</a></p>
                            <p><a href="#">Professional</a></p>
                            <p><a href="#">Business</a></p>
                            <p><a href="#">Enterprise</a></p>
                            <p><a href="#">Dropbox Sign</a></p>
                            <p><a href="#">DocSend</a></p>
                            <p><a href="#">Plans</a></p>
                            <p><a href="#">Product updates</a></p>
                        </div>
                        <div className="col-lg-2 col-6 mt-lg-0 mt-4">
                            <h4 className='mb-4'>Support</h4>
                            <p><a href="#"></a>Help center</p>
                            <p><a href="#">Contact us</a></p>
                            <p><a href="#">Privacy & terms</a></p>
                            <p><a href="#">Cookie policy</a></p>
                            <p><a href="#">Cookies & CCPA preferences</a></p>
                            <p><a href="#">Sitemap</a></p>
                            <p><a href="#">Learning resources</a></p>
                        </div>
                        <div className="col-lg-2 col-6  mt-lg-0 mt-4">
                            <h4 className='mb-4'>Community</h4>
                            <p><a href="#">Blog</a></p>
                            <p><a href="#">Developers</a></p>
                            <p><a href="#">Community forums</a></p>
                            <p><a href="#">Referrals</a></p>
                            <p><a href="#">Reseller partners</a></p>
                            <p><a href="#">Integration partners</a></p>
                        </div>
                        <div className="col-lg-3 col-6  mt-lg-0 mt-4">
                            <h4 className='mb-4'>Company</h4>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Jobs</a></p>
                            <p><a href="#">Investor relations</a></p>
                            <p><a href="#">ESG</a></p>
                            <p><a href="#">Find a partner</a></p>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-2 col-6">
                            <a href="#" className='me-3 fs-4 text-white'><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"  className='fs-4 text-white'><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" className='mx-3 fs-4 text-white'><i class="fa-brands fa-youtube"></i></a> 
                            <hr className='mt-4'/>        
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <a href="#" className='me-3 fs-5 text-white'><i class="fa-solid fa-globe"></i> English (United States) <i class="fa-solid fa-greater-than ms-2"></i></a>        
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Footer;