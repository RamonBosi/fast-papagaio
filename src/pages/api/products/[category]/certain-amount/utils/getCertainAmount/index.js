import { getByCategory } from "../../../utils/getByCategory"

export async function getCertainAmount(category,amount){

  const productsByCategory = await getByCategory(category)

  return productsByCategory.splice(0,amount)
}