import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getLPItems() {
  const query = `
    query MyQuery {
      lpItems(first: 40) {
        type
        title
        description {
          raw
        }
        image {
          url
        }
        icon
      }
    }  
  `

  return fetchHygraphQuery(query)
}