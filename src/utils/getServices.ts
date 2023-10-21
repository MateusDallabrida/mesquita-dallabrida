import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getServices() {
  const query = `
    query MyQuery {
      services(first: 20) {
        highlight
        phone
        title
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}