import React, { useState } from "react";
import Emoji from "./API/Emoji";

function First(props) {
  const[fetchdata,setfetchdata]=useState(Emoji)
  console.log(Emoji)
  return (
    <>
      <div className="container-fluied section1 p-lg-5 p-0">
        <div className="row text-center text-white">
            <h2>Join over 700 million registered <br /> users who trust Dropbox</h2>
            <p>Easy to use, reliable, private, and secure. It’s no wonder Dropbox is the choice for storing and sharing your <br /> most important files.</p>
            <div className="col"><button class="btn btn-primary rounded-0 text-dark fw-bold fs-5 p-4 mt-4" type="submit">Find your plan <i class="fa-solid fa-arrow-right ms-3"></i></button></div>
            <video className="my-5"  height="400" autoPlay={true} controls loop playsinline>
              <source src="img/Dropbox_Homepage.mp4?autoplay=1" type="video/mp4"/>
            </video>
            <h3 className="my-4">See what sets Dropbox apart</h3>
        </div>
            <div className="container mt-5">
              <div className="row p-5">
                {
                  fetchdata.map((res)=>{
                    console.log(res);
                    return(
                      <div className="col-lg-3 col-6 section2 text-white px-lg-3">
                        <img src={res.img} alt="" />
                        <h5 className="mt-3">{res.tittle}</h5>
                        <p className="mt-3">{res.para}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </div>
    </>
  );
}

export default First;
