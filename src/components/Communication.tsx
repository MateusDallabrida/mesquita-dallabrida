import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs'

export function Communication() {
  return (
    <div className="bg-zinc-900 text-white hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 xl:px-0 py-3 flex justify-between">
        <div className="flex gap-4 md:gap-8">
          <p>
            Horário de Portugal: 
            <span className="ml-1 md:ml-2 font-bold">
              12:30:00
            </span>
          </p>
          <p>
            Cotação do Euro: 
            <span className="ml-1 md:ml-2 font-bold">
              €5,19
            </span>
          </p>
        </div>

        <div className='flex items-center gap-3 md:gap-6'>
          <BsFacebook className="w-5 h-5" />
          <BsInstagram className="w-5 h-5" />
          <BsLinkedin className="w-5 h-5" />
          <BsWhatsapp className="w-5 h-5" />
          <BsYoutube className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}