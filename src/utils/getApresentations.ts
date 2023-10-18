import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getApresentations() {
  const query = `
    query MyQuery {
      apresentations {
        title
        phone
        caption
        video {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}