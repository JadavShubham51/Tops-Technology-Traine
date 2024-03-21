import React, { useEffect, useState } from "react";
import Haeder from "../comon_componet/Haeder";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,MDBIcon
} from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

function Dashbord() {


  const [data,setdata] =useState([]);

  useEffect(()=>{
    fetch();
  },[])

  // get data from api user 
  const fetch = async ()=>{
    const res = await axios.get(`http://localhost:3000/user`);
    setdata(res.data);
  };

  // delete user data from admin
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    fetch();
  }

  const statusHandle = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    const currentStatus = res.data.status;
  
    try {
      if (currentStatus === "block") {
        const res = await axios.patch(`http://localhost:3000/user/${id}`, { status: "unblock" });
        if (res.status === 200) {
          toast.success('Status changed to unblock successfully');
          fetch();
        }
      } else if (currentStatus === "unblock") {
        const res = await axios.patch(`http://localhost:3000/user/${id}`, { status: "block" });
        if (res.status === 200) {
          toast.success("Status changed to block successfully");
          fetch();
        }
      }
    } catch (error) {
      console.error("Error while updating status:", error);
      toast.error("Error updating status. Please try again later.");
    }
  };

  return (
    <div>
      <Haeder />
      <h1>Dashboard User data</h1>
      <MDBTable align="middle" hover>
        <MDBTableHead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>

            <th scope="col">email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Status</th>

            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data && data.map((value,index,arr)=>{
            console.log(value)
            return(
              <tr key={value.id}>
            <td>{value.id}</td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={value.imges}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{value.name}</p>
                </div>
              </div>
            </td>

            <td>{value.email}</td>
            <td>
              <p className="fw-normal mb-1">{value.mobile}</p>
            </td>
            <td>
              <MDBBadge onClick={()=>statusHandle(value.id)} color="primary" pill>
              {value.status}
              </MDBBadge>
            </td>

            <td>
            
            <MDBBtn to="/View" color="info" rounded size="sm">
            <MDBIcon far icon="eye" />
              </MDBBtn>
              <MDBBtn color="success"className="ms-2" rounded size="sm">
                Edit
              </MDBBtn>
              <MDBBtn onClick={()=>{deleteHandel(value.id)}} color="danger" className="mx-2" rounded size="sm">
                delete
              </MDBBtn>
            </td>
          </tr>
            )
          })}
          
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Dashbord;
