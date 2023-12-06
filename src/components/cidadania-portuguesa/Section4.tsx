import Image from "next/image"
import { RiArrowRightSFill } from "react-icons/ri"

export function Section4() {
  return (
    <section className="bg-second">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <Image
          alt=""
          src="/ex_01.jpeg"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover object-top rounded-md"
        />
        <div>
          <h2 className="text-3xl font-bold text-main mb-8">
            Quem tem direito?
          </h2>
          <p className="text-lg mb-4 flex ">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
              Há mais de 6 anos ajudando pessoas a realizarem o sonho Europeu!
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
              Neto(a) de cidadão(ã) português(a);
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Bisneto(a) de cidadão(ã) português(a), desde que o filho ou o neto do português adquira a Nacionalidade;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Casado(a) com cidadão(ã) português(a);
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Em união estável com cidadão(ã) português(a);
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Cônjuge de um cidadão português, quando o casamento ocorreu antes de 03 de Outubro de 1981;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Descendente de judeus sefarditas portugueses;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Filho menor nascido antes da aquisição da cidadania portuguesa pelos pais;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Nascido em ex-colônia portuguesa, mas quando esta ainda estava sob o controle de Portugal;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Residente legal em território português, com tempo de residência superior a 5 anos;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Filho estrangeiro adotado plenamente por cidadão português;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Nascido em Portugal, filho de estrangeiros, maiores de idade ou emancipados, mas que tenham permanecido por 10 anos no país;
            </span>
          </p>
          <p className="text-lg mb-4 flex w-full">
            <RiArrowRightSFill className="w-8 h-8 text-main" />
            <span className="w-full">
            Além destes, filho menor de estrangeiros, nascido em território português, que comprove ligação com Portugal.
            </span>
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
      </div>
    </section>
  )
}