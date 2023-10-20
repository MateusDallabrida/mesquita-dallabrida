import { Service } from "@/components/Service"

interface Service {
  title: string
  phone: number
  highlight: boolean
  image: {
    url: string
  }
}

interface Props {
  services: Service[]
}

export function OurServices({ services }: Props) {
  return (
    <section id="services">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-5xl font-bold text-main uppercase text-center">
          Nossos Serviços
        </h1>
        
        {/* Horizontal Services */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 px-4 xl:px-0">
          {services
            .filter(service => service.highlight === true)
            .map((service: Service) => (
              <Service
                key={service.title}
                srcImage={service.image.url}
                altImage="Serviço"
                title={service.title}
                phone={service.phone}
              />
          ))}
        </div>

        {/* vertical Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 px-4 xl:px-0">
          {services
            .filter(service => service.highlight === false)
            .map((service: Service) => (
              <Service
                key={service.title}
                srcImage={service.image.url}
                altImage="Serviço"
                title={service.title}
                phone={service.phone}
              />
          ))}
          <Service
            srcImage="/service_11.jpg"
            altImage="Serviço"
            title="Busca de certidões em Portugal e na Itália"
            phone={351939559818}
          />
          <Service
            srcImage="/service_12.jpg"
            altImage="Serviço"
            title="Reconhecimento de divórcio ocorrido no estrangeiro"
            phone={351939559818}
          />
        </div>
      </div>
    </section>
  )
}