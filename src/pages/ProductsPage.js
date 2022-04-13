import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useFilter } from "../context/FilterProvider";
import { sortByCategory, sortByDiscount, sortByPrice } from "../helper";

function ProductsPage() {
  const [productData, setProductData] = useState([]);
  const [filterState, filterDispatch] = useFilter();
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

  const sortedByPrice = sortByPrice(productData, filterState.maxPrice); // mxPrice 10000 show price less than 10000
  console.log("after price", sortedByPrice);
  const sortedByCategory = sortByCategory(sortedByPrice, ["decor", "office"]); // decor , desk , office
  console.log("after cat", sortedByCategory);
  const sortedByDiscount = sortByDiscount(sortedByCategory, 5); // 10 , 20 , 30 , 40 ,50 , 60 , 70 , 80
  console.log("after dis", sortedByDiscount);
  const finalProd = sortedByDiscount;
  // setProductData(sortedByDiscount);

  return (
    <div className="section__products">
      <div className="section__filter">
        <Filters />
      </div>
      <div className="section__productList p-0-5">
        {finalProd.map((prod) => {
          console.log("hel", prod);
          return <ProductCard key={prod.id} data={prod} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
