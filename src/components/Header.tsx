import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'

import { DropdownMenu } from "@/components/DropdownMenu"
import { AccordeonMenu } from "@/components/AccordeonMenu"

export function Header() {
  const [show, setShow] = useState(false)

  return (
    <header className="w-full bg-main text-white fixed sm:sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 xl:px-0 py-6 flex justify-end">
        <Link href="/">          
          <div className="w-36 md:w-48 lg:w-72 h-24 md:h-28 lg:h-32 rounded-b-3xl bg-white top-0 left-4 xl:left-0 absolute z-10 flex justify-center items-center p-4 shadow-lg">
            <Image
              alt="Logotipo da Mesquita e Dallabrida"
              src="/Logo_Horizontal_Bordo.png"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        <nav className='hidden sm:flex gap-12 items-center font-medium'>
          <Link
            href="/" className="hover:underline underline-offset-4 font-bold">
            Início
          </Link>
          <DropdownMenu
            menu={{
              value: "Serviços",
              href: "/busca-por-certidoes"
            }}
            items={[
              { value: "Busca por Certidões", href: "/busca-por-certidoes" },
              { value: "Vistos", href: "/vistos" },
              { value: "Cidadania Italiana", href: "/cidadania-italiana" },
              { value: "Cidadania Portuguesa", href: "/cidadania-portuguesa" },
            ]}
          />
          <Link href="/#about-us" className="hover:underline underline-offset-4 font-bold">
            Sobre Nós
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-4 font-bold">
            Blog
          </Link>
          <Link href="/#contact" className="hover:underline underline-offset-4 font-bold">
            Contato
          </Link>
        </nav>

        <button onClick={() => setShow(prev => !prev)} className="sm:hidden">
          <MdMenu className="w-6 h-6" />
        </button>
      </div>
      <div className={`${show ? 'block' : 'hidden'} shadow-md`}>
        <nav className="flex flex-col bg-white">
          <Link
            href="/" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Início
          </Link>
          <AccordeonMenu
            onClick={() => setShow(prev => !prev)}
            menu="Serviços"
            items={[
              { value: "Busca por Certidões", href: "/busca-por-certidoes" },
              { value: "Vistos", href: "/vistos" },
              { value: "Cidadania Italiana", href: "/cidadania-italiana" },
              { value: "Cidadania Portuguesa", href: "/cidadania-portuguesa" },
            ]}
          />
          <Link
            href="/#about-us" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Sobre Nós
          </Link>
          <Link
            href="/blog" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Blog
          </Link>
          <Link
            href="/#contact" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}