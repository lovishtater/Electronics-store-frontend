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
            amount = amount + product.price;
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
        amount={getFinalPrice()*100}
        name="Buy Products"
        shippingAddressS
        billingAddress
        />
       
    ):(
        <>
        <h1>Please login to continue</h1>
        <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
        </Link>
        </>
    )
    }
    return (
        <div>
        <h3 >Stripe Checkout </h3>
        <h2> Total cart value $ {getFinalPrice()}</h2>
        <h3>{showStripe()}</h3>
        </div>
    )
}

export default StripeCheckout
