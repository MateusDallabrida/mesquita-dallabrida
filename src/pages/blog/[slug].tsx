import { Communication } from "@/components/Communication"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from '@/components/Thumbnail'
import Image from "next/image"

import { getFooter } from '@/utils/getFooter'

export default function Post({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[72px]">
        <main className="max-w-3xl mx-auto p-4 xl:px-0">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="text-sm font-medium py-1 px-3 text-main bg-red-100 rounded-2xl">Tema</p>
            <p className="text-sm text-gray-900">16 de Outubro de 2023</p>
            <p className="text-sm text-main font-bold">Mateus Dallabrida</p>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis.</h2>
          <Image
            src="/service_01.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[512px] rounded-2xl object-cover mt-6"
          />
          <article className="prose prose-headings:text-start text-justify prose-base sm:prose-lg md:prose-xl mt-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis. Suspendisse volutpat, arcu in lacinia consequat, purus nisl convallis dui, eget iaculis nisl velit quis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis. Suspendisse volutpat, arcu in lacinia consequat, purus nisl convallis dui, eget iaculis nisl velit quis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis. Suspendisse volutpat, arcu in lacinia consequat, purus nisl convallis dui, eget iaculis nisl velit quis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis. Suspendisse volutpat, arcu in lacinia consequat, purus nisl convallis dui, eget iaculis nisl velit quis ex.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla massa, laoreet semper suscipit venenatis, sollicitudin quis turpis. Suspendisse volutpat, arcu in lacinia consequat, purus nisl convallis dui, eget iaculis nisl velit quis ex.</p>
          </article>
          <h3 className="text-4xl font-bold pt-16">Artigos Recomendados</h3>
          <div className="mt-6 mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </main>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps() {
  const { footer } = await getFooter()

  return {
    props: {
      data: JSON.stringify(footer) || null
    }
  }
}