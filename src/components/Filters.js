import React from "react";
import { useCart } from "../context/CartProvider";
import { useFilter } from "../context/FilterProvider";

function Filters() {
  const [filterState, filterDispatch] = useFilter();

  return (
    <div className="section__filters p-3">
      <div class="filter-wrapper">
        <div class="box">
          <ul class="list">
            <div>
              <span>Price Range</span>
            </div>
            <input
              class="slider"
              type="range"
              min="0"
              max="10000"
              step="100"
              onChange={(e) => {
                filterDispatch({
                  type: "MAX_PRICE",
                  payload: e.target.value,
                });
                // console.log(e.target.value);
              }}
            />
          </ul>
        </div>
        <div class="checkbox-list">
          <ul class="list">
            <div class="list-heading">
              <span>Category</span>
            </div>
            <label for="checkbox1">
              <input
                type="checkbox"
                value={"decor"}
                onClick={(e) => {
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target,
                  });
                }}
              />
              Decor
            </label>
            <label for="checkbox2">
              <input
                type="checkbox"
                value={"office"}
                onClick={(e) => {
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target,
                  });
                }}
              />
              Office
            </label>
            <label for="checkbox3">
              <input
                type="checkbox"
                value={"desk"}
                onClick={(e) => {
                  filterDispatch({
                    type: "CATEGORIES",
                    payload: e.target,
                  });
                }}
              />
              Desk Accessories
            </label>
          </ul>
        </div>
        <div class="radio-sort">
          <ul class="list">
            <div class="list-heading">
              <span>Sort By</span>
            </div>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={(e) => {
                  filterDispatch({
                    type: "LOW_TO_HIGH",
                    payload: "LOW_TO_HIGH",
                  });
                }}
              />
              Low to high
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={(e) => {
                  filterDispatch({
                    type: "HIGH_TO_LOW",
                    payload: "HIGH_TO_LOW",
                  });
                }}
              />
              High to Low
            </label>
          </ul>
        </div>
        <div class="radio-stars">
          <ul class="list">
            <div class="list-heading">
              <span>By Discount</span>
            </div>
            <label>
              <input
                type="radio"
                name="rating"
                value={20}
                onChange={(e) => {
                  filterDispatch({
                    type: "DISCOUNT",
                    payload: e.target.value,
                  });
                }}
              />
              20% and above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={30}
                onChange={(e) => {
                  filterDispatch({
                    type: "DISCOUNT",
                    payload: e.target.value,
                  });
                }}
              />
              30% and above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={40}
                onChange={(e) => {
                  filterDispatch({
                    type: "DISCOUNT",
                    payload: e.target.value,
                  });
                }}
              />
              40% and above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                value={50}
                onChange={(e) => {
                  filterDispatch({
                    type: "DISCOUNT",
                    payload: e.target.value,
                  });
                }}
              />
              50% and above
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
