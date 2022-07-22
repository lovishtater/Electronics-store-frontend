import React, { useState, useEffect } from "react";
import Card from "../core/ProductCard";
import { getProducts, searchProducts } from "../core/helper/coreapicalls";
import Base from "../core/Base";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (query) => {
    setLoading(true);
    if(query){
    await searchProducts(query).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
    }else{
      loadAllProduct();
    }
    setLoading(false);
  };


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

  const debounce = (func, wait = 1000) => {
    let timeout;
    return (...value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(value);
      }, wait);
    };
  };

  const handleSearch = debounce((value) => {
    fetchProducts(value);
  }, 1000);

  useEffect(() => {
    loadAllProduct();
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
      <section className="container py-2">
        <div className="row pt-3 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">All our products</h1>
            <p>
              Shop for Home Appliances, Laptops & Accessories online at Vijay
              Electronics
            </p>
          </div>
          <div className="col-lg-6 m-auto" style={{ display: "flex" }}>
            <input
              className="form-control me-4"
              type="search"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        <div className="row text-center">
          {loadingMessage()}
          {error && <div className="text-danger">{error}</div>}
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
