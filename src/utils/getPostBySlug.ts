import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getPostBySlug(slug: string) {
  const query = `
    query MyQuery {
      post(where: {slug: "${slug}"}) {
        author
        body {
          raw
        }
        date
        image {
          url
        }
        slug
        tag
        title
        authorPhoto {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}