export function filterByValue(products,min,max){

  if(min && max){

    if(min < max){

      return products.filter((p) => p.value >= min && p.value <= max)
    }

    return null
  }

  if(min){

    return products.filter((p) => p.value >= min)
  }

  if(max){

    return products.filter((p) => p.value <= max)
  }

  return null
}