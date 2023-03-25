import { getByCategory } from "./utils/getByCategory"

export default function productsByCategory(req, res) {

  const { category } = req.query

  return res.status(200).json(getByCategory(category))
}