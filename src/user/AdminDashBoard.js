import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index";
import AdminLeftPanel from "../admin/AdminLeftPanel";


const AdminDashBoard = () => {
  const {
    user: { name, email, role }
  } = isAutheticated();

 

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <Base
      title="Welcome to admin area"
      description="Manage all of your products here"
      className="container-fluid p-4"
    >
      <div className="row">
        <div className="col-3">
        <AdminLeftPanel />
        </div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
