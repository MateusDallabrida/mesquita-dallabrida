import { Acordeon } from "@/components/Acordeon"

export function Section2() {
  return (
    <section className="bg-second">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-8">
            Conheça os diversos tipos de vistos de Portugal e saiba qual é melhor para o seu caso.
          </h2>
          <p className="text-lg mb-4">
            Existem diversos tipos de vistos para viver em Portugal, sendo de forma temporária ou permanente. Eles podem variar em curta duração, estada temporária e residência e são escolhidos de acordo com o seu objetivo.
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
        <div className="flex flex-col gap-6">
          <Acordeon
            title="VISTO D1 – VISTO DE TRABALHO"
            body="O visto de trabalho é atribuído quando você já tem uma proposta de emprego ou um contrato de trabalho certo em Portugal. Para solicitar você precisa apresentar, entre outros documentos: O contrato de trabalho assinado por ambas as partes; Uma carta redigida pela empresa e Comprovantes de alojamento e meios de subsistência."
          />
          <Acordeon
            title="VISTO D2 – VISTO DE EMPREENDEDOR"
            body="Este visto é para todos os estrangeiros que querem ter um investimento em Portugal. Você precisa provar que já trabalha de forma autônoma ou que o negócio que você abrir terá relevância econômica e social para o país. O Visto D2 permite ao seu titular, e aos agregados familiares, a entrada em território português para solicitar a Autorização de Residência."
          />
          <Acordeon
            title="VISTO D3 – PROFISSIONAL ALTAMENTE QUALIFICADO"
            body="É exclusivo para profissionais altamente qualificados, que é aquele que exerce uma função que necessita de competências técnicas especializadas e que desejam alavancar a sua carreira internacional. Para solicitar o profissional altamente qualificado, deve provar a sua qualificação."
          />
          <Acordeon
            title="VISTO D4 – VISTO PARA ESTUDAR EM PORTUGAL (COM MATRÍCULA OU ACEITAÇÃO DA UNIVERSIDADE)"
            body="É indicado para estudar em Portugal em longa duração, ou seja, mais de 1 ano. A vantagem é que se o período de permanência for superior a 5 anos, você poderá adquirir a nacionalidade Portuguesa por tempo de residência."
          />
          <Acordeon
            title="VISTO D5 – VISTO DE ESTUDO"
            body="É indicado para todos os cidadãos estrangeiros que queiram morar em Portugal para fins de estudo e não sejam nacionais de Estados Membros da União Europeia, do Espaço Econômico Europeu ou da Suíça. Ele é aconselhado para estudantes do ensino superior que já residam na Europa."
          />
          <Acordeon
            title="VISTO D7 - VISTO PARA APOSENTADOS OU TITULARES DE RENDIMENTOS"
            body="É destinado a quem tem rendimento mensal garantido e deseja viver em Portugal. Portugal é um dos países mais procurados por aposentados devido a qualidade de vida, segurança e a facilidade na mobilidade para outros países."
          />
          <Acordeon
            title="GOLDEN VISA"
            body="O Programa “Golden Visa” foi criado pelas autoridades portuguesas em Outubro de 2012, e é um caminho rápido para os investidores estrangeiros de países não pertencentes à União Europeia obterem uma autorização de residência permanente válida em Portugal, e que permite também viajar livremente na maioria dos países europeus (Espaço Schengen). No âmbito do programa “Golden Visa”, os cidadãos não comunitários só precisam de fazer um dos investimentos previstos na lei para obter uma autorização de residência em Portugal."
          />
        </div>
      </div>
    </section>
  )
}