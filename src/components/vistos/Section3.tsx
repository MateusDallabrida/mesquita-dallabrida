import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from "next/image"

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

export function Section3({ testimonials }: Props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    rows: 2,
    prevArrow: <CustomPrevArrow custom="text-white" />,
    nextArrow: <CustomNextArrow custom="text-white" />,
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
    <div className="relative">
      <Image
        src="/landing-page/example_01.jpg"
        alt=""
        height={0}
        width={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-[#5a1f24] opacity-40" />
      <div className="relative max-w-6xl mx-auto p-12 px-4 lg:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center uppercase text-white pt-8">
          Depoimentos
        </h2>
        <p className="text-sm sm:text-base mx-4 text-center mt-4 text-white font-medium">
          Confira abaixo o depoimento dos nossos clientes
          <a
            className="mx-1 text-white underline underline-offset-2"
            target="_blank"
            href="https://www.google.com/maps/place/Mesquita+%26+Dallabrida+Advocacia+Internacional/@38.753667,-9.199539,16z/data=!3m1!5s0xd1ecd28ec9deb65:0x953b7f9a2353e5e2!4m17!1m8!3m7!1s0xd1ecd28ecbb3195:0x249c855d05306fc!2sR.+Dr.+Jo%C3%A3o+de+Barros+15,+1500-206+Lisboa,+Portugal!3b1!8m2!3d38.7536674!4d-9.1995391!16s%2Fg%2F11c26cxcd_!3m7!1s0xd1ecdf91a3f74fd:0x75286a03ac85d56d!8m2!3d38.7536825!4d-9.1995397!9m1!1b1!16s%2Fg%2F11kjmd30w4?hl=pt-BR&entry=ttu">
            no Google Negócios
          </a>
        </p>
        <Slider {...settings} className="px-4 xl:px-0">            
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.name} className="p-6">
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}