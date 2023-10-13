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
            <p className="text-white text-xl font-bold uppercase absolute bottom-10 left-[calc(50%-123.7px)]">
              Cidadania Portuguesa
            </p>
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
            <p className="text-white text-xl font-bold uppercase absolute bottom-10 left-[calc(50%-123.7px)]">
              Cidadania Italiana
            </p>
          </div>
        </div>

        {/* vertical Services */}
        <div></div>
      </div>
    </section>
  )
}