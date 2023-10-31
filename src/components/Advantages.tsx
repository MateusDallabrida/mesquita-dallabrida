import {
  BsFillHouseFill,
  BsBriefcaseFill,
  BsBookHalf,
  BsFillPinMapFill,
  BsFillAirplaneFill,
  BsFillFlagFill,
  BsGlobe,
  BsFillHandThumbsUpFill,
  BsFillTrophyFill
} from "react-icons/bs"
import { Advantage } from "@/components/Advantage"

export function Advantages() {
  return (
    <section className="w-full h-[640px] sm:h-[764px] relative flex justify-center items-center">
      <video preload="auto" playsInline autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="rome.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-black opacity-50" />
      <div className="max-w-7xl w-full absolute z-10">
        <h1 className="text-3xl sm:text-5xl font-bold uppercase text-white text-center">
          Vantagens do Passaporte Europeu
        </h1>

        <div className="mt-12 sm:mt-24 grid grid-cols-3 gap-8 lg:gap-24 px-4 xl:px-0">
          <Advantage
            icon={<BsFillHouseFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Residir na Europa"
          />
          <Advantage
            icon={<BsBriefcaseFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Trabalhar na Europa"
          />
          <Advantage
            icon={<BsBookHalf className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Estudar na Europa"
          />
          <Advantage
            icon={<BsFillPinMapFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Livre Circulação"
          />
          <Advantage
            icon={<BsFillAirplaneFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Intercâmbio"
          />
          <Advantage
            icon={<BsFillFlagFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Cidadão Europeu"
          />
          <Advantage
            icon={<BsGlobe className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Fila Especial"
          />
          <Advantage
            icon={<BsFillHandThumbsUpFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Repassar Cidadania"
          />
          <Advantage
            icon={<BsFillTrophyFill className="w-8 sm:w-12 h-8 sm:h-12 text-white" />}
            title="Qualidade de Vida"
          />
        </div>
      </div>
    </section>
  )
}