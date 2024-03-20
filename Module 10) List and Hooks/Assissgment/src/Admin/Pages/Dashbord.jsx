import React, { useEffect, useState } from "react";
import AHeader from "../Comon_componet/AHeader";
import AFooter from "../Comon_componet/AFooter";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashbord() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  // get data from api
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/users`);
    // console.log(res);
    setdata(res.data);
  };

  //data delete from api
  const deletehandel= async(id)=>{
    await axios.delete(`http://localhost:3000/users/${id}`)
    fetch();
  }
  
  return (
    <div>
      <AHeader />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">Manager Data</h1>
            <table className="table table-dark table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">username</th>
                  <th scope="col">email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((value, index, arr) => {
                    console.log(value)
                    return (
                      <tr key={value.id}>
                        <th scope="row">{value.id}</th>
                        <td>{value.username}</td>
                        <td>{value.email}</td>
                        <td>{value.mobile}</td>
                        <td>
                            <button className="btn btn-success">{value.status}</button>
                            <Link className="btn btn-primary mx-2" to={`/edit/${value.id}`}>Edit</Link>
                            <button className="btn btn-danger" onClick={()=>deletehandel(value.id)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AFooter />
    </div>
  );
}

export default Dashbord;
