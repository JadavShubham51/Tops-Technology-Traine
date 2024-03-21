import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


// usepara use to get the id

function Edituser(props) {
    let history = useNavigate()

    const {id} = useParams();

    const [user,setuser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    useEffect(()=>{
        loadUser();
    },[]);


    const {name,username,email,phone,website} = user;

    // chnage form use
    const onInputChange=(e)=>{
        console.log(e.target.value);
        setuser({...user,[e.target.name]:e.target.value});
    }
    // get data frist 
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setuser(result.data); 
    }
    // new data edit way use put use
    const onSubmit= async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history("/");
    }
    

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className='text-center text-success mb-4'>Add A user</h2>
                <form onSubmit={ e => onSubmit(e)}>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter your Name'
                            name='name'
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter your Username'
                            name='username'
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your E-mail Address'
                            name='email'
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your Phone Number'
                            name='phone'
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div  className='from-group m-1'>
                        <input type="text" className='from-control from-control w-100'
                            placeholder='Enter Your Website Name'
                            name='website'
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className='btn btn-primary btn-block'>Add User</button>
                </form>
            </div> 
        </div>
    );
}

export default Edituser;