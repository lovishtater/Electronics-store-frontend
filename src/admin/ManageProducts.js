import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";
import AdminLeftPanel from "./AdminLeftPanel";


const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisProduct = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
        
      } else {
        preload();
      }
    });
  };

  const updateButton = product => {
    return (
      <Link
        className="btn btn-outline-success"
        to={`/admin/product/update/${product._id}`}
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
      </svg>
      </Link>
    )};

  const deleteButton = product => {
    return (
      <button
        onClick={() => {
          deleteThisProduct(product._id);
        }}
        className="btn rounded btn-outline-danger"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
      </button>
    )};


  return (
    <Base title="Welcome admin" description="Manage products here">
<div className="row">
      <div className="col-lg-3 col-m-3 col-s-12 mb-3"> 
      <AdminLeftPanel />
      </div>
        <div className=" border col-lg-9 col-m-9 col-s-12 ">
    <h2 className="text-center text-dark my-3">Total {products.length} products</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
        <tr key={index}>
          <th key={index} scope="row">{index+1}</th>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>{product.stock}</td>
          <td>{updateButton(product)}</td>
          <td>{deleteButton(product)}</td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</Base>
  );
};

export default ManageProducts;

// {products.map((product, index) => {
//             return (
//               <div key={index} className="row text-center mb-2 ">
//                 <div className="col-7">
//                   <h3 className="text-dark text-left">{product.name}</h3>
//                 </div>
//                 <div className="col-1">
//                   <Link
//                     className="btn btn-success"
//                     to={`/admin/product/update/${product._id}`}
//                   >
//                     <span className="">Update</span>
//                   </Link>
//                 </div>
//                 <div className="col-1">
//                   <button
//                     onClick={() => {
//                       deleteThisProduct(product._id);
//                     }}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
