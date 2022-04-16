import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";
import Card from "./ProductCard";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadAllProduct = () => {
    setLoading(true);
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

    const loadingMessage = () => {
    return (
      loading && (
        <div className="col-12 ">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )
    );
  };

  return (
    <Base>
      <section class="py-5" style={{ backgroundColor: "#4D96FF" }}>
        <div class="container">
          <div class="row align-items-center py-5">
            <div class="col-md-6 text-white">
              <h1>Vijay Electronics</h1>
              <p>
                Vijay Electronics is one stop destination for home appliance
                shopping in India.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://i.ibb.co/McSRhck/electronics-store.png"
                alt="About Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>We provide the best services to our customers.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-info text-center">
                <i class="fa fa-truck fa-lg"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Delivery Services</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-info text-center">
                <i class="fa fa-exchange"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-info text-center">
                <i class="fa fa-service"></i>
              </div>
              <h2 class="h5 mt-4 text-center">Repair</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="h1 text-info text-center">
                <i class="fa fa-user"></i>
              </div>
              <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
      <section class="container py-2">
        <div class="row text-center pt-3 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">All our products</h1>
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

      {/* </Grid> */}
    </Base>
  );
}
