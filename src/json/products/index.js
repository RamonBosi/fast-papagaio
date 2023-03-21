const fs = require('fs')
const path = require('path')
const uniqid = require('uniqid')

const quantityProductsToBeCreated = 15

// 'notebook', 'impressora', 'televisao'
const category = process.argv[2]

const formatProductName = (name) => {

  if (name === 'televisao') {
    return 'Televisão'
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
}

const createProduct = (index) => {

  const imageSrc = () => {
    const image = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    return `/produtos/${category}/${category}${image}.jpg`
  }

  return {
    id: uniqid(index),
    productCategory: category,
    productName: `${formatProductName(category)} - Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant finibus ultrices et aenean primis mus`,
    imageSrc: imageSrc(),
    value: Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000,
    amount: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
    stars: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, habitant finibus ultrices et aenean primis mus, elementum varius enim potenti tellus mi. Diam morbi integer cras curae quam, proin scelerisque molestie maecenas sapien volutpat, class nibh magnis montes. Curae rhoncus torquent ut vestibulum erat risus dictum litora sociosqu volutpat aenean praesent bibendum, elit purus dignissim tempor gravida ad efficitur mattis velit odio molestie feugiat luctus nisi, suscipit lectus fringilla aptent urna est tristique facilisi duis egestas consectetur eros."
  }
}

let json = []

for (let n = 1; n <= quantityProductsToBeCreated; n++) {
  const product = createProduct(n)
  json.push(product)
}

fs.writeFile(
  path.resolve(`${__dirname}/build/${category}.json`), 
  JSON.stringify(json), 
  (err) => {
    if(err){
      return console.log(err)
    }

    return console.log('Compilado com sucesso !!')
  }
)