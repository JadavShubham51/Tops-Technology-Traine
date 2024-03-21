import React from "react";

function Section2(props) {
  return (
    <>
      <div className="container-fluied sectiond text-white py-5">
        <h1 className="text-center">How will you use Dropbox?</h1>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 bg-dark p-0 sectionp">
              <img src="img/Segmentation_1.webp" alt="" />
              <div className="info1 p-4">
              <h2>For Work</h2>
              <p className="pb-4">
                Work efficiently with teammates and clients, stay in sync on
                projects, and keep company data safe—all in one place.
              </p>
              <button class="btn btn-primary w-100 p-4 text-dark" type="submit">
                Get Dropbox for work{" "}
                <i class="fa-solid fa-arrow-right mt-1"></i>
              </button>
              </div> 
            </div>
            <div className="col-md-6 col-sm-12 bg-dark p-0">
              <img src="img/Segmentation_2.webp" alt="" />
              <div className="info1 p-4">
              <h2>For personal use</h2>
              <p className="pb-4">
                Keep everything that's important to you and your family
                shareable and safe in one place. Back up files in the cloud,
                share photos and videos, and more.
              </p>
              <button class="btn btn-primary w-100 p-4 text-dark" type="submit">
                Get Dropbox for Personal use
                <i class="fa-solid fa-arrow-right mt-1"></i>
              </button>
              </div>            
            </div>
          </div>

        </div>
        <h1 className="text-center">Cloud storage you can count on</h1>
        <div className="container p-lg-5 p-4 info3">
            <div className="row">
                <div className="col-lg-3 col-6 p-3">
                    <h3>56%</h3>
                    <h4 className="mt-3">Of Fortune 500 companies</h4>
                    <p className="mt-4">have at least one Dropbox team plan.</p>
                </div>
                <div className="col-lg-3 col-6 p-3">
                    <h3>1B+</h3>
                    <h4 className="mt-3">mobile app downloads</h4>
                    <p className="mt-4">with Editors' Choice Awards from the Google Play and Apple App Store.</p>
                </div>
                <div className="col-lg-3 col-6 p-3">
                    <h3>600K+</h3>
                    <h4 className="mt-3">teams globally</h4>
                    <p className="mt-4">use Dropbox to share work, safeguard content, and grow their business.</p>
                </div>
                <div className="col-lg-3 col-6 p-3">
                    <h3>4.5B</h3>
                    <h4 className="mt-3">connections and counting</h4>
                    <p className="mt-4">created through Dropbox file sharing.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
