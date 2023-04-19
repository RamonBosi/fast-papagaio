import { productsJson } from "@/services/productsJson"

export async function getByCategory(category) {

  let res = null

  try {
    const products = await productsJson.get(`${category}.json`)
    res = products.data

  } catch {
    res = null
  }

  return res
}