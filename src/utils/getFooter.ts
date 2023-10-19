import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getFooter() {
  const query = `
    query MyQuery {
      footer(where: {title: "unique"}) {
        address
        email
        phone
      }
    }  
  `

  return fetchHygraphQuery(query)
}