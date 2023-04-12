import axios from "axios";

export async function getByCategory(category){

  const res = await axios.get(`http://localhost:3000/build/${category}.json`)

  return res.data
}