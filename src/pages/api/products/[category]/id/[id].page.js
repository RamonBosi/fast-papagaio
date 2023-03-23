import notebookJson from '@/json/products/build/notebook.json'
import impressoraJson from '@/json/products/build/impressora.json'
import televisaoJson from '@/json/products/build/televisao.json'
import { findById } from './utils/findById'

export default function productsByCategoryAndId(req, res) {

  const { category, id } = req.query

  if (category === 'notebook') {
    return res.status(200).json(findById(notebookJson,id))
  } else if (category === 'impressora') {
    return res.status(200).json(findById(impressoraJson,id))
  }

  return res.status(200).json(findById(televisaoJson,id))
}