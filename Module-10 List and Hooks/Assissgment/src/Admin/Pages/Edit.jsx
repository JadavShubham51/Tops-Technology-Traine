import React, { useEffect, useState } from 'react'
import AFooter from '../Comon_componet/AFooter'
import AHeader from '../Comon_componet/AHeader'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit() {

    // user id leke jane ka he
    const {id} = useParams();

    const [formData,setFormData] =useState({
        username:"",
        email:"",
        password:"",
        mobile:""
    });

    // userdata Id fectch use karge
    useEffect(()=>{
        fetchUserData(id)
    },[id]);

    // only fetch data
    const fetchUserData = async (userId)=>{
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            const userData = response.data;
            setFormData(userData);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    //   id is update data
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.put(`http://localhost:3000/users/${id}`, formData);
          if (res.status === 201) {
            toast.success("User updated successfully");
            console.log("userlog")
          }
        } catch (error) {
          console.error("Error updating user:", error);
          toast.error("Error updating user");
        }
      };

  return (
    <div>
        <AHeader/>
       <div className="container mt-3">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <Link className="btn btn-dark ms-2" to="/dashboard">
            Back
          </Link>
        </form>
      </div>
      <AFooter/>
    </div>
  )
}

export default Edit
