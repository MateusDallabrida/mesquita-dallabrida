import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getOurTeams() {
  const query = `
    query MyQuery {
      ourTeams {
        caption
        description
        name
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}