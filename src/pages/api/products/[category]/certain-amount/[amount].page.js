import { getCertainAmount } from './utils/getCertainAmount'

export default async function certainAmountProductsPerCategory(req, res) {

  const { category, amount } = req.query

  const products = await getCertainAmount(category, amount)

  return res.status(200).json(products)
}