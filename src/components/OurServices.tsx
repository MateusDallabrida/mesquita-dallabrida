import Image from "next/image"

export function OurServices() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-5xl font-bold text-main uppercase text-center">
          Nossos Serviços
        </h1>
        
        {/* Horizontal Services */}
        <div className="md:grid grid-cols-2 gap-12 mt-12 px-4 xl:px-0">
          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_01.jpg"
              alt="Bandeira de Portugal tremulando"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="absolute bottom-20 w-full text-center text-white text-xl font-bold uppercase">
              Cidadania Portuguesa
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative mt-4 md:mt-0">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_02.jpg"
              alt="Coliseu romano"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-top object-cover rounded-xl"
            />
            <p className="absolute bottom-20 w-full text-center text-white text-xl font-bold uppercase">
              Cidadania Italiana
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* vertical Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 px-4 xl:px-0">
          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_03.jpg"
              alt="Visto de Portugal"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Vistos de Residência
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_04.jpg"
              alt="Martelo de Juíz"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Inscrição de advogado na OAP
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_05.jpg"
              alt="Cidade Portuguesa"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Autorizações de Residência
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_06.jpg"
              alt="Um casal segurando um buquê de flores"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Casamento
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_07.jpg"
              alt="Pessoas analizando relatórios numa mesa"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Abertura de atividade e empresas
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_08.jpg"
              alt="Um pessoa carimbando um documento"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Atos notariais
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_09.jpg"
              alt="Um garota segurando um diploma"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Reconhecimento de diplomas
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>

          <div className="relative">
            <div className="w-full h-[400px] bg-main opacity-50 absolute rounded-xl" />
            <Image
              src="/service_10.png"
              alt="Duas pessoas segunrando as mãos"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <p className="w-full text-center px-4 text-white text-xl font-bold uppercase absolute bottom-20">
              Reconhecimento de União Estável
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-[calc(50%-93px)] bg-white text-main inline-block py-3 px-8 uppercase font-medium rounded transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}