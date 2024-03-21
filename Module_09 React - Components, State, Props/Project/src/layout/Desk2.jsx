import React from "react";

function Desk2(props) {
  return (
    <>
      <div className="container-fluied py-5 desk2">
        <h1 className="text-center">Organize all your content in one place</h1>
        <p className="text-center">
          Store all your work—like traditional files, cloud content, Dropbox
          Paper, and web shortcuts—right on your <br /> desktop. Easily find
          what you need using features like Starred files and folders,
          intelligently-suggested <br /> folders, and image search*.
        </p>
        <p className="text-center">
          *Included with Dropbox Professional and Dropbox Business
        </p>
        <div className="row my-5">
          <div className="col-lg-5 col-12  p-5 d-flex justify-content-end align-items-center">
            <div className="div ps-lg-5 ps-0 ms-lg-5 ms-0">
              <h4 className="ps-lg-5 ps-0 ms-lg-5 ms-0">Connect your tools</h4>
              <p className="ps-lg-5 ps-0 ms-lg-5 ms-0">
                Connect Dropbox with the tools you use. Create, edit, and share
                Google Docs, Sheets, and Slides and Microsoft Office files, and
                communicate via Slack and Zoom—all from your desktop. Plus, it's
                easier to identify relevant apps for your files, so you can get
                to your tools faster.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12 bg-dark p-5">
            <img src="img/desk2.webp" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-12 p-5 bg-dark deski d-flex justify-content-center align-items-center ">
            <img src="img/desk3.webp" alt="" />
          </div>
          <div className="col-lg-5 col-12 p-5 d-flex justify-content-start align-items-center ">
            <div className="div pe-lg-5 pe-0 me-lg-5 me-0">
              <h4 className="pe-lg-5 pe-0 me-lg-5 me-0">Stay focused on work</h4>
              <p className="pe-lg-5 pe-0 me-lg-5 me-0">
                Always be sure you'll have your files when you need them. Stay
                up to date with the Activity tab, which shows the files you and
                your team have worked on most recently.
              </p>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5 col-12 p-5 d-flex justify-content-end align-items-center">
            <div className="div ps-lg-5 ps-0 ms-lg-5 ms-0">
              <h4 className="ps-lg-5 ps-0 ms-lg-5 ms-0">Coordinate your team</h4>
              <p className="ps-lg-5 ps-0 ms-lg-5 ms-0">
                With Dropbox, working together is easy. Share any file
                automatically, leave comments, and see the latest activity right
                alongside your work—and keep everyone in sync.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12 bg-dark p-5">
            <img src="img/desk4.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Desk2;
