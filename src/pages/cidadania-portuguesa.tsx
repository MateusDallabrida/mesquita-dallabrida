import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from '@/components/Testimonial'
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'
import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutUs } from '@/components/AboutUs'
import { Section1 } from '@/components/cidadania-portuguesa/Section1'
import { Section2 } from '@/components/cidadania-portuguesa/Section2'
import { Section3 } from '@/components/cidadania-portuguesa/Section3'

import { getFooter } from '@/utils/getFooter'
import { getTestimonials } from '@/utils/getTestimonials'
import { getAboutUs } from '@/utils/getAboutUs'

interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

export default function CidadaniaItaliana({ data }: any) {
  if (!data) return
  const { footer, testimonials, aboutUs } = JSON.parse(data)

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
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <Section1 />
        <Section2 />
        <Section3 />
        <div className="bg-second">
          <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <Slider {...settings} className="px-4 xl:px-0">            
              {testimonials.map((testimonial: Testimonial) => (
                <div key={testimonial.name} className="p-6">
                  <Testimonial testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <AboutUs aboutUs={aboutUs} />
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { testimonials } = await getTestimonials()
  const { aboutUs } = await getAboutUs()

  return {
    props: {
      data: JSON.stringify({
        footer,
        testimonials,
        aboutUs
      }) || null
    }
  }
}