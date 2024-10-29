const getAllProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then((response) => response.json());
  return products;
};

const getProduct = async (id) => {
  const products = await fetch(`https://fakestoreapi.com/products/${id}`).then((response) => response.json());
  return products;
};

const getProductByCategory = async (category) => {
  let categoryParams = "";
  if (category === "men's-clothing") {
    categoryParams = "men's%20clothing";
  } else if (category === "women's-clothing") {
    categoryParams = "women's%20clothing";
  } else {
    categoryParams = category;
  }

  const products = await fetch(`https://fakestoreapi.com/products/category/${categoryParams}`).then((response) => response.json());
  console.log(category);
  console.log(categoryParams);

  return products;
};

const getBestProducts = async () => {
  const products = await getAllProducts();
  const minRate = 4;
  return products.filter((product) => {
    return product.rating.rate >= minRate;
  });
};

export { getAllProducts, getBestProducts, getProduct, getProductByCategory };
