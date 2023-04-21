import { getByCategory } from "../utils/getByCategory"
import { filterByValue } from "./utils/filterByValue"

export default async function filterCategoryProductsBy(req, res) {

  if (req.method === 'POST') {

    const { category } = req.query

    const products = await getByCategory(category)

    if (products) {

      const activeFilters = req.body

      if (activeFilters.byValue) {

        const { min, max } = activeFilters.byValue

        return res.status(200).json(filterByValue(products, min, max))
      }

      return res.status(200).json(products)
    }

    return res.status(200).json(products)
  }
}