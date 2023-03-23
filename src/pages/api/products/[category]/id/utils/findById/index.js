export function findById(products,id){
  return products.find((p) => p.id === id)
}