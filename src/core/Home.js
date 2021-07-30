import React, { useState, useEffect } from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";
import Card from "./ProductCard";
import { getProducts } from "./helper/coreapicalls";
import { Box, Grid, Container, Paper } from "@material-ui/core";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the Vijay Electronics">
    <Box>
      {/* <Grid container xs={4}>
        <Paper>Item 1</Paper>
        <Paper>Item 2</Paper>
        <Paper>Item 3</Paper>
        <Paper>Item 1</Paper>
        <Paper>Item 2</Paper>
        <Paper>Item 3</Paper>
      
      </Grid>
       <Grid item xs={8}> */}
        <div className="row text-center">
        <h1 className="text-dark">All our products</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
      {/* </Grid> */}
    </Box>
      

    </Base>
  );
}
