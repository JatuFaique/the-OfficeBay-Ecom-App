import axios from "axios";
import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartProvider";
import { useFilter } from "../context/FilterProvider";
import {
  searchProd,
  sortByCategory,
  sortByDiscount,
  sortByHL,
  sortByPrice,
  sortByRating,
} from "../helper";

function ProductsPage() {
  const [productData, setProductData] = useState([]);
  const [cartState, cartDispatch] = useCart();
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

  const getCart = async () => {
    try {
      const encT = localStorage.getItem("token");
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: encT,
        },
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        cartDispatch({
          type: "SUCCESS_ADD_TO_CART",
          payload: response.data.cart,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCart();
    getData();
  }, []);

  const searchedProd = searchProd(productData, filterState.searchTerm);

  const sortedByPrice = sortByPrice(searchedProd, filterState.maxPrice); // mxPrice 10000 show price less than 10000
  // console.log("after price", sortedByPrice);
  const sortedByCategory = sortByCategory(
    sortedByPrice,
    filterState.setCategories
  ); // decor , desk , office
  // console.log("after cat", sortedByCategory);
  const sortedByDiscount = sortByDiscount(
    sortedByCategory,
    filterState.minDiscount
  ); // 10 , 20 , 30 , 40 ,50 , 60 , 70 , 80
  // console.log("after dis", sortedByDiscount);
  const sortedByRating = sortByRating(sortedByDiscount, filterState.minRating);
  const sortedbyHL = sortByHL(sortedByRating, filterState.sortBy);

  const finalProd = sortedbyHL;
  // setProductData(sortedByDiscount);

  return (
    <div className="section__products">
      <div className="section__filter">
        <Filters />
      </div>
      <div className="section__productList p-0-5">
        {finalProd.map((prod) => {
          return <ProductCard key={prod.id} data={prod} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
