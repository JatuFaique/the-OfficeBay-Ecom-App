import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function SingleProduct() {
  const [anyProd, setAnyProd] = useState();
  const { product_id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${product_id}`)
      .then((response) => response.json())
      .then((data) => setAnyProd(data.product));
  }, []);
  console.log(product_id, anyProd);
  //   <div class="container">
  //           <div class="images">
  //             <figure>
  //               <img src={anyProd.img} alt="" />
  //             </figure>
  //           </div>
  //           <div class="product">
  //             <small class="category">{anyProd.description}</small>
  //             <div class="name">{anyProd.title}</div>
  //             <span class="price">${anyProd.price}</span>
  //             <p class="desc">Detailed Description</p>
  //             <ul class="bar_tool">
  //               <li class="cart">
  //                 <span class="ui_btn b_lg b_primary">Add to Cart</span>
  //               </li>
  //               <li class="hearts">
  //                 <span class="ui_btn b_lg b_primary">&hearts;</span>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       )
  return (
    <div className="single_product_container">
      {anyProd && <ProductCard data={anyProd} singleP={true} />}
    </div>
  );
}

export default SingleProduct;
