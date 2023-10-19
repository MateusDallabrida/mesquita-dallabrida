import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getTestimonials() {
  const query = `
    query MyQuery {
      testimonials {
        name
        star
        description
        image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}