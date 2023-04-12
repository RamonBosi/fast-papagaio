import axios from "axios";
import { getDomain } from "../utils/getDomain";

export const productsApi = axios.create({
  baseURL: `${getDomain()}/api/products`
})