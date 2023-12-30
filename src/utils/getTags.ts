import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getTags() {
  const query = `
    query MyQuery {
      tags(first: 30) {
        tag
        page
        value
      }
    }  
  `

  return fetchHygraphQuery(query)
}