import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getTestimonials() {
  const query = `
    query MyQuery {
      testimonials(first: 20) {
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