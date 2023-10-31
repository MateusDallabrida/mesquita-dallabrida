import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from '@/components/Testimonial'
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'

interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

interface Props {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: Props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    rows: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  }

  return (
    <section className="bg-second">
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase text-main text-center">
          Depoimentos
        </h2>
        <p className="text-sm sm:text-base mx-4 text-center mt-4 text-gray-600 font-medium">
          Depoimentos extraídos de nosso
          <a
            className="mx-1 text-main underline underline-offset-2"
            target="_blank"
            href="https://www.google.com/maps/place/Mesquita+%26+Dallabrida+Advocacia+Internacional/@38.753667,-9.199539,16z/data=!3m1!5s0xd1ecd28ec9deb65:0x953b7f9a2353e5e2!4m17!1m8!3m7!1s0xd1ecd28ecbb3195:0x249c855d05306fc!2sR.+Dr.+Jo%C3%A3o+de+Barros+15,+1500-206+Lisboa,+Portugal!3b1!8m2!3d38.7536674!4d-9.1995391!16s%2Fg%2F11c26cxcd_!3m7!1s0xd1ecdf91a3f74fd:0x75286a03ac85d56d!8m2!3d38.7536825!4d-9.1995397!9m1!1b1!16s%2Fg%2F11kjmd30w4?hl=pt-BR&entry=ttu">
            estabelecimento
          </a>
          no Google Negócios
        </p>

        <Slider {...settings} className="mt-6 sm:mt-12 px-4 xl:px-0">            
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.name} className="p-6">
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}