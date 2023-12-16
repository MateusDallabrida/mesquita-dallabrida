interface Info {
  title: string
  description: string
  secondaryDescription: string
  phone: string
  image: {
    url: string
  }
}

interface Props {
  infos: Info[]
}

export function Section3({ infos }: Props) {
  const info = [...infos].filter(info => info.title === "Portugal")[0]
  
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto py-16 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
            {info.title}
          </h2>
          {info.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          {info.secondaryDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg mb-4">
              {paragraph}
            </p>
          ))}
          <a
            href={`https://api.whatsapp.com/send?phone=${info.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  )
}
