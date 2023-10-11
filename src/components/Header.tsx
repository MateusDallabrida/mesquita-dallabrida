import Link from 'next/link'
import { Zen_Antique } from 'next/font/google'
const zenAntique = Zen_Antique({ subsets: ['latin'], weight: '400' })

export function Header() {
  return (
    <header className="bg-main text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-2 flex justify-between">
        <h1 className={`${zenAntique.className} text-4xl`}>
          M|D
        </h1>

        <nav className='flex gap-8 items-center font-medium'>
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
      </div>
    </header>
  )
}