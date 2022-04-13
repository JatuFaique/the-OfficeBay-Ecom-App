import React from "react";
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
              <input type="checkbox" />
              Decor
            </label>
            <label for="checkbox2">
              <input
                type="checkbox"
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
              />
              Office
            </label>
            <label for="checkbox3">
              <input type="checkbox" />
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
              <input type="radio" name="sort" />
              Low to high
            </label>
            <label>
              <input type="radio" name="sort" />
              Low to high
            </label>
          </ul>
        </div>
        <div class="radio-stars">
          <ul class="list">
            <div class="list-heading">
              <span>By Rating</span>
            </div>
            <label>
              <input type="radio" name="rating" />3 * and above
            </label>
            <label>
              <input type="radio" name="rating" />3 * and above
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filters;
