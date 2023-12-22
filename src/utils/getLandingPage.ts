import { fetchHygraphQuery } from "./fetchHygraphQuery"

export function getLandingPage() {
  const query = `
    query MyQuery {
      landingPage(where: {title: "unique"}) {
        title
        session01Logo {
          url
        }
        session01Slogan
        session01Flag {
          url
        }
        session01Description
        session02Heading1
        session02Flag {
          url
        }
        session02Heading2
        session03Heading1
        session03Flag {
          url
        }
        session03Description
        session04Heading1
        session05Heading1
        session05Description
        session06Heading1
        session06Description
        session07Heading1
        session08Imagem {
          url
        }
        session08Heading1
        session09Heading1
        session09Image {
          url
        }
        session09Phone
        session10Heading1
        session10Description
        session10Image {
          url
        }
      }
    }  
  `

  return fetchHygraphQuery(query)
}