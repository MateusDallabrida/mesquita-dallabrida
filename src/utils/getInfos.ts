import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getInfos() {
  const query = `
    query MyQuery {
      infos {
        title
        description
        secondaryDescription
        phone
        image {
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}