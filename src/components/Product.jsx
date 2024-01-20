import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const productUrl = "http://localhost:8080/product";

function Product() {
  const [productData, setProductData] = useState([]);
  const getAllProducts = async () => {
    const { data } = await axios.get(productUrl);
    setProductData(data?.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      {productData && (
        <div className="mx-auto w-10/12">
          {productData.map((currEle) => {
            return (
              
                <ProductCard data={currEle} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Product;
