import { productsJson } from "@/services/productsJson"

export async function getByCategory(category){

  const res = await productsJson.get(`${category}.json`)

  return res.data
}