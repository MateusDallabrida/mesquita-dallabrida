import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getWhos() {
  const query = `
    query MyQuery {
      whoIsEntitleds(first: 20) {
        title
      }
    }
  `

  return fetchHygraphQuery(query)
}