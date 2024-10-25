const getAllProducts = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then((response) => response.json());
  return products;
};

const getBestProducts = async () => {
  const products = await getAllProducts();
  const minRate = 4;
  return products.filter((product) => {
    return product.rating.rate >= minRate;
  });
};

export { getAllProducts, getBestProducts };
