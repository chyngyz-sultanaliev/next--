import React from "react";
import Product from "../../product/Product";

const Welcome = () => {
  return (
    <div className="container">
      <center
        style={{
          fontSize: "24px",
          color: "white",
          padding: "20px 0",
        }}
      >
        Home
      </center>
      <Product />
    </div>
  );
};

export default Welcome;
