import { findById } from './utils/findById'

export default async function productsByCategoryAndId(req, res) {

  const { category, id } = req.query

  const products = await findById(category,id)

  return res.status(200).json(products)
}