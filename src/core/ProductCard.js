import React, { useState, useEffect } from "react";
// import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import '../styles.css';
import { API } from "../backend";


const ProductCard = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
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



  return (
    <div class="card" style={{ borderRadius: "15px" }}>
      <div class="bg-image hover-zoom ripple rounded ripple-surface">
        <img
          src={
            product
              ? `${API}/product/photo/${product._id}`
              : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
          }
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            objectFit: "cover",
          }}
          class="img-fluid"
          alt="Laptop"
        />
        <a href="#!">
          <div class="mask"></div>
        </a>
      </div>
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between">
          <div>
            <p>{product.name}</p>
            <p class="small  font-weight-normal text-wrap" >
              {product.description.substring(0, 150) + "..."}
            </p>
          </div>
          <div>
            <p class="small text-muted">Rated 4.0/5</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
          <p>{"$" + product.price}</p>
          {addtoCart && (
            <button
              onClick={addToCart}
              className="btn btn-block btn-outline-dark mt-2 mb-2"
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
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
    //old card
    //  <div class="card-columns">

    // <div className="card text-light bg-info border border-white rounded ">
    //   <div className="card-header lead">{cartTitle}</div>
    //   <div className="card-body">
    //     {getARedirect(redirect)}
    //     <ImageHelper product={product} />
    //     <p className="lead bg-info font-weight-normal text-wrap">
    //       {cartDescrption}
    //     </p>
    //     <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
    //     <div className="row">
    //       <div className="col-12">{showAddToCart(addtoCart)}</div>
    //       <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
    //     </div>
    //   </div>
    // </div>
    // </div>

    //  <Card className={cx(styles.root, shadowStyles.root)}>
    //   {/* <CardMedia
    //     className={cx(styles.media, mediaStyles.root)}
    //     image={
    //       'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    //     }
    //   /> */}
    //   <ImageHelper product={product} />
    //   <CardContent>
    //     <TextInfoContent
    //       classes={textCardContentStyles}
    //       overline={`$`+cartPrice}
    //       heading={cartTitle.slice(0, 20)}
    //       body= {cartDescrption.slice(0, 100)}
    //     />
    //     <div className="col-12">{showAddToCart(addtoCart)}</div>
    //      <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
    //   </CardContent>
    // </Card>