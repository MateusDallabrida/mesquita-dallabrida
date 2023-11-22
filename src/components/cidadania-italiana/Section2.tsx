import { Acordeon } from "@/components/Acordeon"

export function Section2() {
  return (
    <section className="bg-white">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-main text-center mb-8">
          Quem tem direito?
        </h2>
        
        <Acordeon
          title="Descendentes de italianos"
          body="Obtida através de um antepassado italiano, sendo necessária a comprovação por meio de documentos,através da apresentação de certidões (nascimento, casamento e óbito). É importante destacar que não há um limite no número de gerações para a transmissão de cidadania, desde que, toda a documentação seja apresentada. – Pessoas que sejam casadas com um cidadão italiano. Obtida quando um dos membros do casal possui a cidadania  e a transmite para o outro cônjuge. Para usufruir desse benefício o cidadão italiano e o estrageiro(a) deverão estar casados há 3 anos. Lembrando que poderá ser reduzido para 1 e meio caso haja filhos entre o casal."
        />
        <Acordeon
          title="Residentes legais na Itália"
          body="A cidadania italiana é concedida para os estrangeiros que residam legalmente por pelo menos 10 anos no país. – Cidadãos nascidos no país. Esse tipo de reconhecimento é atribuído a quem nasce em território italiano, desde que um dos pais seja de nacionalidade italiana, ou seja, na Itália não é aceito o direito de solo, sendo utilizado somente o direito sanguíneo."
        />
      </div>
    </section>
  )
}