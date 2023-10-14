import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"

export function Footer() {
  return (
    <footer className="bg-main">
      <div className="max-w-7xl mx-auto pt-16 grid md:grid-cols-2 gap-12 px-4 xl:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.437361867125!2d-9.202114023589829!3d38.75367155517112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd28ecbb3195%3A0x249c855d05306fc!2sR.%20Dr.%20Jo%C3%A3o%20de%20Barros%2015%2C%201500-206%20Lisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1697324594503!5m2!1spt-BR!2sbr"
          className="w-full h-[362px] rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div>
          <h3 className="text-4xl text-white font-bold mb-4">
            Endereço
          </h3>
          <p className="flex gap-2 items-center text-white mb-12">
            <MdLocationOn className="w-5 h-5" />
            R. Dr. João de Barros 15, 1500-230 Lisboa, Portugal
          </p>
          <h3 className="text-4xl text-white font-bold mb-4">
            Telefone
          </h3>
          <p className="flex gap-2 items-center text-white mb-12">
            <MdPhone className="w-5 h-5" />
            +351 939 559 818
          </p>
          <h3 className="text-4xl text-white font-bold mb-4">
            E-mail
          </h3>
          <p className="flex gap-2 items-center text-white">
            <MdAttachEmail className="w-5 h-5" />
            mdallabrida.advocacia@gmail.com
          </p>
        </div>
      </div>
      <p className="text-center text-white py-6">
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
    </footer>
  )
}