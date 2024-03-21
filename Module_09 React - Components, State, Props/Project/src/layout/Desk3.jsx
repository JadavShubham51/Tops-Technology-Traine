import React from 'react';

function Desk3(props) {
    return (
        <>
            <div className="container-fluied desk3 py-5">
                <div className="container text-center">
                    <h1>It all comes together on your desktop</h1>
                    <p>Bring your <a href="#">work together</a>  and focus your workday right from Dropbox on your desktop.</p>
                    <div className="desk3i p-4 m-auto mt-5">
                        <img src="img/desk5.webp" alt="" />
                    </div>                  
                </div>
                <div className="container mt-5">
                    <div className="row">
                    <div className="col-lg-4 col-12 p-3">
                        <h5>Centralize your work</h5>
                        <p>Dropbox connects your content, tools, and apps, giving you one organized place to work.</p>
                    </div>
                    <div className="col-lg-4 col-12 p-3">
                        <h5>Jump back into work quickly</h5>
                        <p>Easily prioritize your workday and stay focused on what's happening with Dropbox in the Windows system tray and macOS menu bar.</p>
                    </div>
                    <div className="col-lg-4 col-12 p-3">
                        <h5>Find all your files easily</h5>
                        <p>Organize and access your files from the Dropbox folder in Windows File Explorer and macOS Finder.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desk3;