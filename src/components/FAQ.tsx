import { Acordeon } from "@/components/Acordeon"

export function FAQ() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4 xl:px-0 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-xl text-gray-900 font-bold">
            FAQ
          </p>
          <p className="text-4xl text-gray-900 font-bold">
            Tudo o que você precisa saber sobre a Mesquita & Dallabrida
          </p>
          <p className="text-gray-900">
            Ainda tem alguma dúvida? Fale conosco pelo
            <a
              href="https://api.whatsapp.com/send?phone=351939559818"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-main font-bold hover:underline underline-offset-4"
            >
              WhatsApp
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Acordeon
            title="Quem tem direito à nacionalidade portuguesa?"
            body="A nacionalidade portuguesa pode ser adquirida por descendência (se um dos pais ou avós forem portugueses), por casamento com um cidadão português, por naturalização após residência legal em Portugal ou por outras vias específicas. Além disso, cidadãos de países de língua oficial portuguesa e ex-colônias portuguesas têm regras especiais que podem facilitar a obtenção da nacionalidade."
          />
          <Acordeon
            title="Quais são os benefícios de obter a nacionalidade portuguesa?"
            body="Ao adquirir a nacionalidade portuguesa, você se torna um cidadão Europeu, o que lhe dá o direito de viver, trabalhar e estudar em qualquer país da União Europeia sem a necessidade de visto ou autorização especial. Além disso, você terá acesso a todos os benefícios sociais e serviços de saúde em Portugal, e seus filhos também se tornarão cidadãos portugueses, abrindo-lhes as portas para uma educação europeia de qualidade. A nacionalidade portuguesa também oferece a segurança e a estabilidade de ser cidadão de um país membro da União Europeia."
          />
          <Acordeon
            title="Quanto tempo demora o processo de nacionalidade portuguesa?"
            body="O tempo de tramitação varia, podendo levar de meses a mais de um ano. Recomenda-se acompanhamento regular do status do processo. Contratar um advogado especializado pode trazer segurança na preparação e apresentação dos documentos."
          />
          <Acordeon
            title="Por que solicitar a cidadania italiana pela via judicial?"
            body="A via judicial é usada tanto para reconhecimento da cidadania italiana por via paterna, sendo uma ótima alternativa à longa espera nos consulados italianos no Brasil, quanto para via materna, já que esta opção só é possível através do sistema judicial italiano, o qual já possui uma vasta jurisprudência que reconhece a cidadania italiana pela via materna."
          />
          <Acordeon
            title="Como funciona o processo de solicitação da cidadania italiana por via judicial?"
            body="Para solicitar a cidadania italiana por via judicial, você precisa contratar um advogado especializado em cidadania. O advogado preparará sua petição e documentos, que serão submetidos ao tribunal italiano competente. O tribunal avaliará seu caso e emitirá uma decisão."
          />
          <Acordeon
            title="Quanto tempo leva para adquirir a cidadania italiana por via judicial e por que é importante contratar um advogado?"
            body="Não há um prazo exato para a aquisição da cidadania italiana por via judicial, pois isso depende do tribunal competente e da complexidade do caso. O processo pode variar de aproximadamente 6 meses a até 2 anos e meio. A contratação de um advogado é essencial na via judicial, pois ele desempenha um papel fundamental na organização dos documentos e no cumprimento de todos os requisitos. Uma boa assessoria jurídica em todas as etapas ajudará a agilizar o processo, garantindo que a documentação esteja em ordem e que você tenha a melhor chance de sucesso na obtenção da sua cidadania."
          />
          <Acordeon
            title="Quais são as opções para morar legalmente em Portugal sem ter nacionalidade europeia?"
            body="A forma correta de imigrar para Portugal sem ter nacionalidade europeia é solicitando um visto de residência, se você ainda estiver em seu país de origem. Para aqueles que já estão em Portugal e desejam regularizar sua situação, é altamente recomendável buscar assistência jurídica de um advogado especializado em imigração. Cada caso é único, e um advogado pode ajudar a identificar a melhor opção e orientar você durante o processo de legalização em Portugal."
          />
        </div>
      </div>
    </section>
  )
}