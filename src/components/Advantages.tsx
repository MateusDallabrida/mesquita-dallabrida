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
    <section className="bg-second">
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-5xl font-bold uppercase text-main text-center">
          Vantagens do Passaporte Europeu
        </h1>

        <div className="mt-12 sm:mt-24 grid grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-24 px-4 xl:px-0">
          <Advantage
            icon={<BsFillHouseFill className="w-12 h-12 text-main" />}
            title="Residir na Europa"
          />
          <Advantage
            icon={<BsBriefcaseFill className="w-12 h-12 text-main" />}
            title="Trabalhar na Europa"
          />
          <Advantage
            icon={<BsBookHalf className="w-12 h-12 text-main" />}
            title="Estudar na Europa"
          />
          <Advantage
            icon={<BsFillPinMapFill className="w-12 h-12 text-main" />}
            title="Livre Circulação"
          />
          <Advantage
            icon={<BsFillAirplaneFill className="w-12 h-12 text-main" />}
            title="Intercâmbio"
          />
          <Advantage
            icon={<BsFillFlagFill className="w-12 h-12 text-main" />}
            title="Cidadão Europeu"
          />
          <Advantage
            icon={<BsGlobe className="w-12 h-12 text-main" />}
            title="Fila Especial"
          />
          <Advantage
            icon={<BsFillHandThumbsUpFill className="w-12 h-12 text-main" />}
            title="Repassar Cidadania"
          />
          <Advantage
            icon={<BsFillTrophyFill className="w-12 h-12 text-main" />}
            title="Qualidade de Vida"
          />
        </div>
      </div>
    </section>
  )
}