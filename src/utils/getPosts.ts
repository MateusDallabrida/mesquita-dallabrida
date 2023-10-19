import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getPosts() {
  const query = `
    query MyQuery {
      posts {
        author
        date
        slug
        title
        image {
          url
        }
        body {
          raw
        }
        tag
        authorPhoto {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}