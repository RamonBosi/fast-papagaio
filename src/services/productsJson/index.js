import axios from 'axios'
import { getDomain } from '../utils/getDomain'

export const productsJson = axios.create({
  baseURL: `${getDomain()}/json/products`
})