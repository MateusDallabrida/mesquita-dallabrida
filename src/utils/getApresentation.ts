import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getApresentation() {
  const query = `
    query MyQuery {
      apresentation(where: {title: "unique"}) {
        heading
        caption
        video {
          url
        }
        phone
      }
    }  
  `

  return fetchHygraphQuery(query)
}