import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showuser } from "../feature/userDetails";

function Read() {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showuser());
  }, []);
//   if(loading){
//     return <h2>Loading</h2>
//   }
  return (
    <div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                        <button className="btn btn-success">View</button>
                        <button className="btn btn-danger mx-2" onClick={()=>dispatch(deleteUser(data.id))}>Delete</button>
                        <button className="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Read;
