const sortByPrice = (prevProd, maxPrice) => {
  return prevProd.filter((product) => product.price <= maxPrice);
};

const sortByCategory = (prevProd, setCategories) => {
  console.log(setCategories.length);
  if (prevProd.length > 0) {
    // sorted data should only contain matching value
    return prevProd.filter((item) => {
      return setCategories.indexOf(item.categoryName) > -1;
    });
  } else {
    return prevProd;
  }
};

const sortByDiscount = (prevProd, minDiscount) => {
  console.log(prevProd, minDiscount);
  return prevProd.filter((product) => product.discount >= minDiscount);
};

export { sortByCategory, sortByPrice, sortByDiscount };
