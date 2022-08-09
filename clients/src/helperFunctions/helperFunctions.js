export default function getGameById(arr, id)  {
  for (let g of arr) {
    if (g.id === id) {
      return g
    }
  };
  return null
};