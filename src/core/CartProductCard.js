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
  const [count, setCount] = useState(product.count);


  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
    getARedirect(redirect);
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
 const productAddedToCart = () => {
   return (
             <div class="alert alert-success d-flex align-items-center" role="alert">
          <svg
            class="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
          </svg>
          <div>
            <p class="mb-0">
              Product added to cart successfully.
            </p>
          </div>
        </div>
        )
  }



  return (
    <div class="card mb-3" style={{ maxWidth: "540px", borderRadius: "15px" }}>
      <div class="row g-0">
        <div
          class="col-md-4"
          style={{
            backgroundImage: `url(${
              product
                ? `${API}/product/photo/${product._id}`
                : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg`
            })`,
            backgroundSize: "cover",
          }}
        >
        </div>
        <div class="col-md-8 p-1">
          <div class="d-flex justify-content-between align-items-center">
            <div class="col-10`">
              <h6 class="card-title">{product.name}</h6>
            </div>
            <div class="col-2">
              <p class="card-text">X {product.count}</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <p>{"$" + product.price}</p>
            {addtoCart && (
              <button
                onClick={addToCart}
                className="btn btn-block btn-outline-dark btn-sm"
              >
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
                <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

    // <div class="card" style={{ borderRadius: "15px" }}>
    //   <div class="bg-image hover-zoom ripple rounded ripple-surface">
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
    //       class="img-fluid"
    //       alt="Laptop"
    //     />
    //   </div>
    //   <div class="card-body pb-0">
    //     <div class="d-flex justify-content-between">
    //       <div>
    //         <p></p>
    //         <p class="small  font-weight-normal text-wrap">
    //           {product.description.substring(0, 150) + "..."}
    //         </p>
    //       </div>
    //       <div>
    //         <p class="small text-muted">Rated 4.0/5</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="card-body">
    //     <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
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

