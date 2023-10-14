import { Service } from "@/components/Service"

export function OurServices() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-5xl font-bold text-main uppercase text-center">
          Nossos Serviços
        </h1>
        
        {/* Horizontal Services */}
        <div className="grid md:grid-cols-2 gap-12 mt-12 px-4 xl:px-0">
          <Service srcImage="/service_01.jpg" altImage="Bandeira de Portugal tremulando" title="Cidadania Portuguesa"  />
          <Service srcImage="/service_02.jpg" altImage="Coliseu romano" title="Cidadania Italiana"  />
        </div>

        {/* vertical Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-12 px-4 xl:px-0">
          <Service srcImage="/service_03.jpg" altImage="Vistos de Residência" title="Vistos de Residência"  />
          <Service srcImage="/service_04.jpg" altImage="Martelo de Juíz" title="Inscrição de advogado na OAP"  />
          <Service srcImage="/service_05.jpg" altImage="Cidade Portuguesa" title="Autorizações de Residência"  />
          <Service srcImage="/service_06.jpg" altImage="Um casal segurando um buquê de flores" title="Casamento"  />
          <Service srcImage="/service_07.jpg" altImage="Pessoas analizando relatórios numa mesa" title="Abertura de atividade e empresas"  />
          <Service srcImage="/service_08.jpg" altImage="Um pessoa carimbando um documento" title="Atos notariais"  />
          <Service srcImage="/service_09.jpg" altImage="Um garota segurando um diploma" title="Reconhecimento de diplomas"  />
          <Service srcImage="/service_10.png" altImage="Duas pessoas segunrando as mãos" title="Reconhecimento de União Estável"  />
        </div>
      </div>
    </section>
  )
}