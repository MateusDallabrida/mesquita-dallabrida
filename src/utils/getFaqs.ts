import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getFaqs() {
  const query = `
    query MyQuery {
      faqs(first: 20) {
        type
        answer
        question
      }
    }  
  `

  return fetchHygraphQuery(query)
}