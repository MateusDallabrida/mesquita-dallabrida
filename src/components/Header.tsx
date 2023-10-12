import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import Link from 'next/link'
import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

export function Header() {
  const [show, setShow] = useState(false)

  return (
    <header className="w-full bg-main text-white fixed sm:sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-2 flex justify-between">
        <h1 className={`${zenAntique.className} text-4xl`}>
          M|D
        </h1>

        <nav className='hidden sm:flex gap-8 items-center font-medium'>
          <Link
            href="/" className="hover:underline underline-offset-4">
            Início
          </Link>
          <Link href="/#" className="hover:underline underline-offset-4">
            Serviços
          </Link>
          <Link href="/#" className="hover:underline underline-offset-4">
            Sobre Nós
          </Link>
          <Link href="/blog" className="hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="/#" className="hover:underline underline-offset-4">
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
            href="/" className="w-full py-6 px-8 font-medium text-main bg-second">
            Início
          </Link>
          <Link
            href="/#" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Serviços
          </Link>
          <Link
            href="/#" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Sobre Nós
          </Link>
          <Link
            href="/#" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Blog
          </Link>
          <Link
            href="/#" className="w-full py-6 px-8 font-medium text-gray-900 hover:bg-second">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}