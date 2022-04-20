import React, { useState, useEffect } from "react";
import Card from "../core/ProductCard";
import { getProducts, searchProducts } from "../core/helper/coreapicalls";
import Base from "../core/Base";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const searchP = async() => {
    console.log(search);
    setLoading(true);
    await searchProducts(search).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
    setLoading(false);
  }


  const loadAllProduct = () => {
    setLoading(true);
    getProducts().then((data) => {
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
      <section class="container py-2">
        <div class="row pt-3 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">All our products</h1>
            <p>
              Shop for Home Appliances, Laptops & Accessories online at Vijay
              Electronics
            </p>
          </div>
          <div class="col-lg-6 m-auto" style={{ display: "flex" }}>
            <input
              class="form-control me-4"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-rounded text-white m-1"
              onClick={() => searchP()}
              style={{ backgroundColor: "#233DFF" }}
            >
              Search
            </button>
            <button
              class="btn btn-rounded btn-outline-danger m-1"
              onClick={() => loadAllProduct()}
            >
              reset
            </button>
          </div>
        </div>

        <div className="row text-center">
          {loadingMessage()}
          <div className="row m-auto">
            {products && products.length > 0 ? (
              products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="mb-4 col-md-6 col-lg-4 col-sm-12 m-auto"
                  >
                    <Card product={product} />
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  className="img-fluid center"
                  src="https://i.ibb.co/GxfNHGR/noresult.gif"
                  alt="noresult"
                  style={{
                    height: "40%",
                    width: "auto",
                  }}
                />
                <h1>No products</h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Products;
