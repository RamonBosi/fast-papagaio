import notebookJson from '@/json/products/build/notebook.json'
import impressoraJson from '@/json/products/build/impressora.json'
import televisaoJson from '@/json/products/build/televisao.json'

export function getByCategory(category){

  if(category === 'notebook'){
    return notebookJson
  }else if(category === 'impressora'){
    return impressoraJson
  }

  return televisaoJson
}