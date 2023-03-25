import { getByCategory } from '../utils/getByCategory'
import { getCertainAmount } from './utils/getCertainAmount'

export default function certainAmountProductsPerCategory(req, res) {

  const { category, amount } = req.query

  const products = getByCategory(category)

  return res.status(200).json(getCertainAmount(products, amount))
}