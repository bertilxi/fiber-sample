import axios from "axios";

export default async function main(...args: any[]) {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return result.data;
}
