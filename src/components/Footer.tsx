import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

interface Footer {
  address: string
  email: string
  phone: string
}

interface Props {
  footer: Footer
}

export function Footer({ footer }: Props) {
  return (
    <footer className="relative h-[768px] md:h-[640px] flex justify-center items-center bg-main" id="contact">
      <Image
        alt="Imagem de Portugal"
        src="/landing-page/example_08.jpg"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-[#343f2c] opacity-60" />
      <div className="absolute bg-main max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 p-4 sm:p-12 rounded-lg">
        <Image
          alt="Logotipo da Mesquita e Dallabrida"
          src="/Logo_Branca_sem-fundo.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-52 md:w-96 m-auto"
        />
        <div>
          <p className="text-sm sm:text-base flex gap-2 items-center text-white mb-6">
            <MdLocationOn className="w-5 h-5" />
            {footer.address}
          </p>
          <p className="text-sm sm:text-base flex gap-2 items-center text-white mb-6">
            <MdPhone className="w-5 h-5" />
            {footer.phone}
          </p>
          <p className="text-sm sm:text-base flex gap-2 items-center text-white mb-6">
            <MdAttachEmail className="w-5 h-5" />
            {footer.email}
          </p>
          <h3 className="text-2xl text-white font-bold mb-3">
            Redes Sociais
          </h3>
          <div className='flex items-center gap-3 md:gap-6 mb-0'>
            <a href="https://www.instagram.com/livelisboa.pt" target="_blank">
              <BsInstagram className="w-5 h-5 text-white" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=351939559818" target="_blank">
              <BsWhatsapp className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.youtube.com/@livelisboa" target="_blank">
              <BsYoutube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        <p className="col-span-1 md:col-span-2 text-sm sm:text-base text-center text-white">
          © 2023 Mesquita & Dallabrida. Todos os Direitos Reservados | Desenvolvido por
          <a
            href="https://www.linkedin.com/in/joaovitorcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-bold hover:underline underline-offset-4"
          >
            João Vitor
          </a>
        </p>
      </div>
    </footer>
  )
}