import React, { useState } from 'react';
import Product from './API/Product'

function Products(props) {
    const[fetchapi,setfetchapi]=useState(Product)
    console.log(Product);
    return (
        <>
        <div className="container-fluied product p-lg-5 p-0">
            <div className="container p-5">
                <h2 className='text-center'>A set of products to help you do more</h2>
                <div className="row mt-5">
                    {
                        fetchapi.map((res)=>{
                            console.log(res);
                            return(
                                <div className="col-lg-3 col-6 products3 p-lg-4 p-2 mt-lg-0 mt-4">
                                    <img src={res.img} alt="" />
                                    <h4 className='mt-3 fw-bold'>{res.tittle}</h4>
                                    <p className='mt-3 mb-5'>{res.para}</p>
                                    <a href="#">Learn more <i class="fa-solid fa-arrow-right"></i></a>
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

export default Products;