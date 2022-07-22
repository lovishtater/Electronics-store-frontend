import React, {useEffect, useState}from 'react';
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from 'react-stripe-checkout'
import { API } from '../backend';
import { createOrder } from './helper/orderHelper';

const StripeCheckout = ({
    products = [],
    setReload = (f) => f,
    reload = undefined,
 }) => {

    const [data, setData] = useState({
    loading: false,
    error: '',
    success: false,
    address:''
    });

    const token = isAutheticated() && isAutheticated().token;
    const userId = isAutheticated() && isAutheticated().user._id;

    const getFinalPrice = () => {
        let amount = 0 ;
        products.map(product => {
            amount = (product.price * product.count) + amount;
        });
        return amount;
    };

    const makePayment = token => {
        const body = {
            token,
            products
        }
        const headers = {
            'Content-Type': 'application/json'
        };
        return fetch(`${API}/stripepayment`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            // return response.json();
            console.log(response);
            cartEmpty()
        }).catch(error => {console.log(error)});
    };



    const showStripe = () => {
    return isAutheticated() ? (
      <StripeCheckoutButton
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        token={makePayment}
        amount={getFinalPrice() * 100}
        name="Buy Products"
        shippingAddressS
        billingAddress
      />
    ) : (
      <div class="alert alert-warning" role="alert">
        <h6>Please login to proceed payment</h6>
        <Link to="/signin">
          <button className="btn btn-warning">Signin</button>
        </Link>
      </div>
    );
    }
    return (
        <div>
        <h3 >Stripe Checkout </h3>
        <h4> Total cart value $ {getFinalPrice()}</h4>
        <h3>{showStripe()}</h3>
        </div>
    )
}

export default StripeCheckout
