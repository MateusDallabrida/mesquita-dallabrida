import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Thumbnail } from '@/components/Thumbnail'
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'

interface Post {
  author: string
  date: string
  slug: string
  title: string
  image: {
    url: string
  }
  body: {
    raw: any
  }
  tag: string
  authorPhoto: {
    url: string
  }
}

interface Props {
  posts: Post[]
}

export function OurBlog({ posts }: Props) {
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

  const handlePosts = () => {
    const thumbnails: any = []
    for (let i = 0; i < 3; i++) {
      thumbnails.push(
        <div key={posts[i].slug} className="px-6 xl:px-0">
          <Thumbnail post={posts[i]} />
        </div>
      )
    }
    return thumbnails
  } 

  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase text-main text-center">
          Nosso Blog
        </h2>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 px-4 xl:px-0 mt-6 sm:mt-12">
          {handlePosts()}
        </div>

        <div className="md:hidden mt-8">
          <Slider {...settings}>
            {handlePosts()}    
          </Slider>
        </div>
      </div>
    </section>
  )
}