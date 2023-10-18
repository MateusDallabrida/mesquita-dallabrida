import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getQualities() {
  const query = `
    query MyQuery {
      qualities {
        caption
        heading
      }
    }  
  `

  return fetchHygraphQuery(query)
}