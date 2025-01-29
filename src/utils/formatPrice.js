export const formatPrice = (priceArray) => {
  if (!Array.isArray(priceArray) || priceArray.length === 0) return "N/A";

  const minPrice = Math.min(...priceArray);
  const maxPrice = Math.max(...priceArray);

  return minPrice === maxPrice
    ? `$${minPrice.toFixed(2)}`
    : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;
};
