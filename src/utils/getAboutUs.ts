import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getAboutUs() {
  const query = `
    query MyQuery {
      aboutUs(where: {title: "unique"}) {
        image {
          url
        }
        phone
        description
      }
    }  
  `

  return fetchHygraphQuery(query)
}