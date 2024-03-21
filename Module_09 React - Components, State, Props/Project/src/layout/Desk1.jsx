import React from 'react';

function Desk1(props) {
    return (
        <>
            <div className="container-fluied mt-5 desk1">
                <div className="row">
                    <div className="col-lg-4 col-12 desk1-bg1 p-5">
                        <h1>Get the desktop experience today</h1>
                        <p>One organized place that brings work into focus and keeps teams in sync—right from your desktop.</p>
                        <button class="btn btn-primary rounded-0 my-3 p-4 px-5" type="submit">Download Now <i class="fa-solid fa-arrow-right ms-3"></i></button>
                        <br />
                        <a href="#">Learn more</a>
                    </div>
                    <div className="col-lg-8 col-12 p-5 desk1-bg">
                        <img src="img/desk1.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Desk1;