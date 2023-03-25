import notebookJson from '@/json/products/build/notebook.json'
import impressoraJson from '@/json/products/build/impressora.json'
import televisaoJson from '@/json/products/build/televisao.json'
import { getCertainAmount } from './utils/getCertainAmount'

export default function certainAmount(req, res) {

  const { category,amount } = req.query

  if(category === 'notebook'){
    return res.status(200).json(getCertainAmount(notebookJson,amount))
  }else if(category === 'impressora'){
    return res.status(200).json(getCertainAmount(impressoraJson,amount))
  }

  return res.status(200).json(getCertainAmount(televisaoJson,amount))
}