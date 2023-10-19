import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getFaqs() {
  const query = `
    query MyQuery {
      faqs {
        answer
        question
      }
    }  
  `

  return fetchHygraphQuery(query)
}