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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.437361867125!2d-9.202114023589829!3d38.75367155517112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd28ecbb3195%3A0x249c855d05306fc!2sR.%20Dr.%20Jo%C3%A3o%20de%20Barros%2015%2C%201500-206%20Lisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1697324594503!5m2!1spt-BR!2sbr"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
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