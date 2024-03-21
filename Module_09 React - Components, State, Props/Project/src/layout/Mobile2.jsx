import React from "react";

function Mobile2(props) {
  return (
    <>
      <div className="container-fluied mobile2 pb-5">
        <div className="row">
          <div className="col-lg-7 col-12 p-5 mobile3 d-flex justify-content-center align-items-center">
            <img src="img/MobileOffline.webp" alt="" />
          </div>
          <div className="col-lg-5 col-12 p-5 d-flex justify-content-start align-items-center ">
            <div className="div pe-lg-5 pe-0 me-lg-5 me-0">
              <h4 className="pe-lg-5 pe-0 me-lg-5 me-0">
                All your work, at your fingertips
              </h4>
              <p className="pe-lg-5 pe-0 me-lg-5 me-0">
                Access your files from anywhere with the Dropbox mobile app, and
                never miss a beat. You can even mark files and folders for
                offline access to make them available if you lose your internet
                connection.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5 col-12 p-5 d-flex justify-content-end align-items-center">
            <div className="div ps-lg-5 ps-0 ms-lg-5 ms-0">
              <h4 className="ps-lg-5 ps-0 ms-lg-5 ms-0">
                Give and get feedback
              </h4>
              <p className="ps-lg-5 ps-0 ms-lg-5 ms-0">
                Connect Dropbox with the tools you use. Create, edit, and share
                Google Docs, Sheets, and Slides and Microsoft Office files, and
                communicate via Slack and Zoom—all from your desktop. Plus, it's
                easier to identify relevant apps for your files, so you can get
                to your tools faster.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12 p-5 mobile3 d-flex justify-content-center align-items-center">
            <img src="img/Mobile2.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile2;
