import path from 'path'
import fs from 'fs/promises'

import notebook from './build/notebook.json'
import impressora from './build/impressora.json'
import televisao from './build/televisao.json'

export async function getByCategory(category){

  // const productsPath = path.resolve(`./build/${category}.json`) 

  // const products = await fs.readFile(productsPath)

  if(category === 'notebook'){
    return notebook
  }else if(category === 'impressora'){
    return impressora
  }

  return televisao
}