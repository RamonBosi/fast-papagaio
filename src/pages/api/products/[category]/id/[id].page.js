import { getByCategory } from '../utils/getByCategory'
import { findById } from './utils/findById'

export default function productsByCategoryAndId(req, res) {

  const { category, id } = req.query

  const products = getByCategory(category)

  return res.status(200).json(findById(products,id))
}