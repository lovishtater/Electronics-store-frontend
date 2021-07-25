import React, {useEffect, useState}from 'react';
import { isAutheticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import StripeCheckoutButton from 'react-stripe-checkout'


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

    const makePayment = () => {


    }

    const showStripe = () => {
    return isAutheticated() ? (
        <StripeCheckoutButton
        stripeKey=""
        token={makePayment}}
        

        />
       
    ):(
<h1>Please login to continue</h1>
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
