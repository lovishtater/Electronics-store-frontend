import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getCategories,removeCategory } from "./helper/adminapicall";
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

    const updateButton = categories => {
    return (
      <Link
        className="btn btn-success"
        to={`/admin/categories/update/${categories._id}`}
      >
       Update
      </Link>
    )};

      const deleteThiscategories = productId => {
    removeCategory(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

      const deleteButton = categories => {
    return (
      <button
        onClick={() => {
          deleteThiscategories(categories._id);
        }}
        className="btn btn-danger"
      >
      Delete
      </button>
    )};

  return (
    <Base title="Welcome admin" description="Manage categories here">
      <div className="row">
      <div className="col-lg-3 col-m-3 col-s-12 mb-3"> 
      <AdminLeftPanel />
      </div>
        <div className=" border col-lg-9 col-m-9 col-s-12 ">
          <h2 className="text-center text-dark my-3">Total {categories.length} categories</h2>
          <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Update details</th>
          <th scope="col">Delete Product</th>
        </tr>
      </thead>
      <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={index}>
          <th key={index} scope="row">{index+1}</th>
          <td>{category.name}</td>
          <td>{updateButton(category)}</td>
          <td>{deleteButton(category)}</td>
        </tr>
            );
          })}
          </tbody>
         </table>
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
