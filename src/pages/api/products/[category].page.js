import notebookJson from '@/json/products/build/notebook.json'
import impressoraJson from '@/json/products/build/impressora.json'
import televisaoJson from '@/json/products/build/televisao.json'

export default function productsByCategory(req, res) {

  const { category } = req.query

  if(category === 'notebook'){
    return res.status(200).json(notebookJson)
  }else if(category === 'impressora'){
    return res.status(200).json(impressoraJson)
  }

  return res.status(200).json(televisaoJson)
}