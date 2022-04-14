const sortByPrice = (prevProd, maxPrice) => {
  return prevProd.filter((product) => product.price <= maxPrice);
};

const sortByCategory = (prevProd, setCategories) => {
  if (setCategories.length !== 0) {
    if (prevProd.length > 0) {
      // sorted data should only contain matching value
      return prevProd.filter((item) => {
        return setCategories.indexOf(item.categoryName) > -1;
      });
    } else {
      return prevProd;
    }
  } else {
    return prevProd;
  }
};

const sortByDiscount = (prevProd, minDiscount) => {
  console.log(prevProd, minDiscount);
  return prevProd.filter((product) => product.discount >= minDiscount);
};

function sortByHL(prevProd, sortBy) {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return [...prevProd.sort((a, b) => b.price - a.price)];
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return [...prevProd.sort((a, b) => a.price - b.price)];
  }
  return prevProd;
}

export { sortByCategory, sortByPrice, sortByDiscount, sortByHL };
