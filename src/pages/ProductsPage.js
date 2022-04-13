import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [productData, setProductData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const result = await response.json();
      setProductData(result.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="section__products">
      <div className="section__filter">Filter</div>
      <div className="section__productList p-0-5">
        {productData.map((prod) => {
          return <ProductCard key={prod.id} data={prod} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
