import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Service } from "@/components/Service"
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'

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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  return (
    <section id="services">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-main uppercase text-center">
          Nossos Serviços
        </h1>
        
        {/* Horizontal Services */}
        <div className="grid md:grid-cols-2 gap-12 mt-6 sm:mt-12 px-6 xl:px-0">
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
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 px-4 xl:px-0">
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
        </div>
      
        <div className="md:hidden mt-8">
          <Slider {...settings}>
            {services
              .filter(service => service.highlight === false)
              .map((service: Service) => (
                <div key={service.title} className="p-6">
                  <Service
                    key={service.title}
                    srcImage={service.image.url}
                    altImage="Serviço"
                    title={service.title}
                    phone={service.phone}
                  />
                </div>
            ))}            
          </Slider>
        </div>
      </div>
    </section>
  )
}