import { getByCategory } from "../../../utils/getByCategory"

export async function getCertainAmount(category,amount){

  const productsByCategory = await getByCategory(category)

  if(productsByCategory){
    
    return productsByCategory.splice(0,amount)
  }

  return null
}