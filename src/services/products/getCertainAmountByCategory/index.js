import { getByCategory } from "../getByCategory"

export function getCertainAmountByCategory(category,amount){

  const productsByCategory = getByCategory(category)

  return productsByCategory.splice(0,amount)
}