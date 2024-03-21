import React from 'react';
import { Incdata,Decdata,Remove } from '../Actions';
import {useSelector,useDispatch} from 'react-redux';


function Counterapp(props) {
    const dispatch = useDispatch();
    const retrundata = useSelector((state)=>state.MyData);
    return (
       <>
       
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <button className='btn btn-primary' onClick={()=>dispatch(Decdata())}>Decerment</button>
                    <br /><br />
                    <h1>{retrundata}</h1>
                    <button className='btn btn-success' onClick={()=>dispatch(Incdata())}>Incerment</button>
                    <button className='btn m-3 btn-danger' onClick={()=>dispatch(Remove())}>remove</button>
                </div>
            </div>
        </div>
        
       </>
    );
}

export default Counterapp;