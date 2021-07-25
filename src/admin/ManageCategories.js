import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getCategories } from "./helper/adminapicall";
import AdminLeftPanel from "./AdminLeftPanel";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);

  const { user, token } = isAutheticated();

  const preload = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-3"> 
      <AdminLeftPanel />
      </div>
        <div className="col-9">
          <h2 className="text-center text-dark my-3">Total 3 products</h2>
          {categories.map((category, index) => {
            return (
              <div className="row text-center mb-2 ">
            <div className="col-7">
              <h6 className="text-dark text-left">{category.name}</h6>
            </div>
            <div className="col-1">
              <Link
                className="btn btn-success"
                to={`/admin/product/update/productId`}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-1">
              <button onClick={() => {}} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
            );
          })}
          
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
