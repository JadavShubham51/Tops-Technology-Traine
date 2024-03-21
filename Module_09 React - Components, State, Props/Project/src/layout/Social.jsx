import React, { useState } from 'react';
import SocialAPI from './API/SoicalAPI';

function Social(props) {
    const[fetchapi,setfetchapi]=useState(SocialAPI)
    console.log(SocialAPI);
    return (
        <>
            <div className="container-fluied soical p-lg-5 p-0">
                <div className="container px-5">
                    <h2 className='text-center'>Get more out of Dropbox by connecting <br /> with the tools you love</h2>
                    <p className='text-center mt-3'><a href="#" >Learn more about partner integrations</a></p>
                    <div className="row mt-5">
                    {
                        fetchapi.map((res)=>{
                            console.log(res);
                            return(
                                <div className="col-lg-3 col-6 p-lg-3 p-2">
                                    <img src={res.img} alt="" />
                                    <h4 className='mt-3 fw-bold'>{res.title}</h4>
                                    <p className='mt-3 mb-5'>{res.para}</p>
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

export default Social;