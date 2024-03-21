import React from "react";

function Mobile1(props) {
  return (
    <>
      <div className="container-fluied mt-5 py-5 Mobile1 text-center">
        <h6 >Dropbox Mobile App</h6>
        <h2 className="mt-3">Keep work flowing—on the go</h2>
        <p className="mt-3">
          The free Dropbox mobile app helps you keep projects moving from
          anywhere, so you can stay focused on <br /> what matters. Access work,
          collaborate with co-workers and clients, and quickly take care of
          tasks—all from <br /> your phone or tablet.
        </p>
        <div className="row mt-5">
        <div className="col-lg-6 col-12 vi p-5">
            <video src="img/mobilev.webm" controls loop></video>
        </div>
        <div className="col-lg-6 col-12 p-5 scan">
            <img className="scan1" src="img/mobilescan.jpeg" alt="" />
            <p className="m-0 mt-3">Scan the QR code or go to</p>
            <a href="#">dropbox.com/go</a>
            <div className="div mt-3">
                <button className="btn ios me-3 ">
                    <div className="div1 d-flex">
                        <i class="fa-brands fa-apple fs-2 mt-2"></i>
                        <div className="div ms-2">
                            <p className="m-0">Download on the</p>
                            <h6 className="me-5">App Store</h6>
                        </div>
                    </div>
                    
                </button>

                <button className="btn google">
                    <div className="div1 d-flex">
                        <i class="fa-brands fa-google-play fs-2 mt-2"></i>
                        <div className="div ms-2">
                            <p className="me-5 m-0">GET IT ON</p>
                            <h6 className="me-5">Google Play</h6>
                        </div>
                    </div>
                    </button>
            </div>
        </div>
        </div>
        <div className="row p-5">
            <a href="#"><img className="mobilei" src="img/mobile1.webp" alt="" /></a>   
        </div>
      </div>
    </>
  );
}

export default Mobile1;
