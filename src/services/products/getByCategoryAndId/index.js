import { getByCategory } from "../getByCategory"

export function getByCategoryAndId(category,id){

  const productsByCategory = getByCategory(category)

  return productsByCategory.find((p) => p.id === id)
}