import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Start Buy in </h1>
        <img src="./logo-no-background.png" alt="Logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          malesuada lacinia massa, vitae sollicitudin mi pharetra sit amet. Duis
          metus leo, interdum ac turpis eu, porta sagittis leo. Nam eget
          malesuada massa, non aliquet mauris.
        </p>
      </div>
      <div className="images">
        <img src="ecommerce.png" alt="phone" />
      </div>
    </div>
  );
}

export default Home;
