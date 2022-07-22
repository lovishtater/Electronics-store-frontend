import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Contact from "../core/home/contact";
import Brands from "../core/home/brands";
import Base from "../core/Base";
import Card from "../core/ProductCard";
import IntroContainer from "../core/home/IntroContainer";
import { getBestSellers } from "../core/helper/coreapicalls";
import FeatureCards from "../core/home/featureCards";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadBestSellers = () => {
    setLoading(true);
    getBestSellers()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    loadBestSellers();
  }, []);

    const loadingMessage = () => {
    return (
      loading && (
        <div className="col-12 ">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    );
  };

  

  return (
    <Base>
    <IntroContainer />
    <FeatureCards />
      <section className="container py-2">
        <div className="row text-center pt-3 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Best Selling products</h1>
            <p>
              Shop for Home Appliances, Laptops & Accessories online at Vijay
              Electronics
            </p>
          </div>
        </div>
        <div className="row text-center">
          {loadingMessage()}
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="mb-4 col-md-6 col-lg-4 col-sm-12">
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Brands />
      <Contact />
    </Base>
  );
}
