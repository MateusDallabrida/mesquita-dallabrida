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

export function Section2({ infos }: Props) {
  const info = [...infos].filter(info => info.title === "Itália")[0]
  return (
    <section className="bg-second">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto py-16 px-4 lg:px-0">
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
        </div>
      </div>
    </section>
  )
}