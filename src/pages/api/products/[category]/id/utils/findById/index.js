import { getByCategory } from "../../../utils/getByCategory"

export async function findById(category,id){

  const productsByCategory = await getByCategory(category)

  return productsByCategory.find((p) => p.id === id)
}