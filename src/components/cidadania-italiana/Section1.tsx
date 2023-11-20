import Image from "next/image"

export function Section1() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
          Te ajudamos a viver o seu sonho europeu!
        </h2>
        <p className="text-lg mb-4">
          Damos todo o auxílio necessário para um processo descomplicado e sem dores de cabeça.
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=351939559818`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-main text-white border border-main inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
        >
          Fale Conosco
        </a>
      </div>
      <Image
        alt=""
        src="/roma.webp"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[368px] object-cover object-top rounded-md"
      />
    </section>
  )
}