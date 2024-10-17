import React from "react";
import Product from "./Components/Product";
import ProductImages from "./Components/Productimages";
import ProductVariation from "./Components/variation";
import ProductPriceStock from "./Components/Productprice";
import ProductDescription from "./Components/Productdescription";
import SeoMetaTags from "./Components/Metatags";

const App = () => {
  return (
    <>
      <Product />
      <ProductImages />
      <ProductVariation />
      <ProductPriceStock />
      <ProductDescription />
      <SeoMetaTags />
    </>
  );
};

export default App;
