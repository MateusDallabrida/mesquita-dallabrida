import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getServices() {
  const query = `
    query MyQuery {
      services {
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