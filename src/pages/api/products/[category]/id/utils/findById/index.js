import { getByCategory } from "../../../utils/getByCategory"

export async function findById(category,id){

  const productsByCategory = await getByCategory(category)

  if(productsByCategory){

    const thereProductWithId = productsByCategory.find((p) => p.id === id)

    return thereProductWithId || null
  }

  return null
}