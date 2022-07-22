import React, { useState, useEffect } from "react";
// import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import '../styles.css';
import { API } from "../backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const ProductCard = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
    getARedirect(redirect);
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };




  return (
    <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "15px"}}>
      <div className="row g-0">
        <div
          className="col-md-4"
          style={{
            backgroundImage: `url(${
              product
                ? `${API}/product/photo/${product._id}`
                : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg`
            })`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="col-md-8 p-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-10`">
              <h6 className="card-title">{product.name}</h6>
            </div>
            <div className="col-2">
              <p className="card-text">X {product.count}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>{"$" + product.price}</p>
            {addtoCart && (
              <button onClick={addToCart} className="btn btn-block btn-outline-dark btn-sm">
                Add to Cart
              </button>
            )}
            {removeFromCart && (
              <button
                onClick={() => {
                  removeItemFromCart(product._id);
                  setReload(!reload);
                }}
                className="btn btn-sm"
              >
                <FontAwesomeIcon icon={faTrash} style={{color: "red"}} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

    // <div className="card" style={{ borderRadius: "15px" }}>
    //   <div className="bg-image hover-zoom ripple rounded ripple-surface">
    //     <img
    //       src={
    //         product
    //           ? `${API}/product/photo/${product._id}`
    //           : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    //       }
    //       style={{
    //         borderTopLeftRadius: "15px",
    //         borderTopRightRadius: "15px",
    //         objectFit: "cover",
    //         width: "100%",
    //         height: "200px",
    //       }}
    //       className="img-fluid"
    //       alt="Laptop"
    //     />
    //   </div>
    //   <div className="card-body pb-0">
    //     <div className="d-flex justify-content-between">
    //       <div>
    //         <p></p>
    //         <p className="small  font-weight-normal text-wrap">
    //           {product.description.substring(0, 150) + "..."}
    //         </p>
    //       </div>
    //       <div>
    //         <p className="small text-muted">Rated 4.0/5</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="card-body">
    //     <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
    //       <p>{"$" + product.price}</p>
    //       {addtoCart && (
    //         <button
    //           onClick={addToCart}
    //           className="btn btn-block btn-outline-dark mt-2 mb-2"
    //         >
    //           Add to Cart
    //         </button>
    //       )}
    //       {removeFromCart && (
    //         <button
    //           onClick={() => {
    //             removeItemFromCart(product._id);
    //             setReload(!reload);
    //           }}
    //           className="btn btn-block btn-outline-danger mt-2 mb-2"
    //         >
    //           Remove from cart
    //         </button>
    //       )}
    //     </div>
    //   </div>
    // </div>

