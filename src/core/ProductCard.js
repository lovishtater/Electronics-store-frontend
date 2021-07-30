import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import '../styles.css';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

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

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
    getARedirect(redirect);
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-dark mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  return (
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
    
     <Card className={cx(styles.root, shadowStyles.root)}>
      {/* <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        }
      /> */}
      <ImageHelper product={product} />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={`$`+cartPrice}
          heading={cartTitle.slice(0, 20)}
          body= {cartDescrption.slice(0, 100)}
        />
        <div className="col-12">{showAddToCart(addtoCart)}</div>
         <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
      </CardContent>
    </Card>
   
  );
};

export default ProductCard;
