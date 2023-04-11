import { getByCategory } from "./utils/getByCategory"

export default async function productsByCategory(req, res) {

  const { category } = req.query

  const products = await getByCategory(category)

  return res.status(200).json(products)
}