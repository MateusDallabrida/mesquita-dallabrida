import Image from "next/image"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from '@/components/Testimonial'
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'

import { Communication } from '@/components/Communication'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { getFooter } from '@/utils/getFooter'
import { getTestimonials } from '@/utils/getTestimonials'

interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

export default function BuscaPorCertidoes({ data }: any) {
  if (!data) return
  const {
    footer,
    testimonials
  } = JSON.parse(data)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    rows: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  }

  return (
    <>
      <Communication />
      <Header />
      <div className="relative sm:static top-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-4 lg:px-0">
          <div>
            <h2 className="text-5xl font-bold text-main mb-8">
              Busca por Certidões
            </h2>
            <p className="text-lg mb-4">
              Somos especializados em assessoria ao reconhecimento das Cidadanias Italiana e Portuguesa, diversos tipos de serviços consulares, e também realizamos o auxilio e a assessoria completa na obtenção de Vistos para diversos tipos de países.
            </p>
            <p className="text-lg">
              Caso você não conheça o local exato de nascimento/batismo e casamento dos seus antepassados é necessário fazer a pesquisa do registro, ou seja, é preciso encontrar o livro onde o nascimento/ batismo e casamento foram registrados.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=351939559818`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-main text-white inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
            >
              Fale Conosco
            </a>
          </div>
          <Image
            alt=""
            src="/buscas.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto py-16 px-4 lg:px-0">
          <div>
            <h2 className="text-5xl font-bold text-main mb-8">
              Itália
            </h2>
            <p className="text-lg mb-4">
              Somente para você entender a dificuldade de encontrar um registro e conseguir uma certidão do século XIX (1800 a 1899), que é a grande maioria, explicamos como é a divisão geográfica da Itália.
            </p>
            <p className="text-lg">
              A Itália é dividida em 20 regiões. Cada região tem suas Províncias, das quais se totalizam 109 em toda Itália. Cada Província possui seus Comune. Existem 8.101 Comune na Itália, ou seja, se a pessoa não sabe a Região ou Província teremos que pesquisar nas 8.101 Comunes italianas e neste caso é praticamente impossível localizar o registro.
            </p>
          </div>
          <div>
            <p className="text-lg mb-4">
              Exemplo:
            </p>
            <p className="text-lg mb-4">
              A Provincia di Treviso localiza-se na Região do Veneto e possui 98 Comunes, entre eles o Comune di Treviso. É como São Paulo cidade e estado.
            </p>
            <p className="text-lg mb-4">
              Os registros civis (nascimento, casamento e óbito) na Região do Veneto começaram em setembro de 1871.Na maioria das regiões do norte da Itália começaram no ano de 1866 ou 1871.
            </p>
            <p className="text-lg mb-4">
              No Sul os registros civis começaram antes.Caso o seu ascendente italiano nasceu na Provincia di Treviso DEPOIS de setembro de 1871, o registro pesquisado é NASCITA e se encontra no Ufficio dello Stato Civile de uma das 98 cidades.
            </p>
            <p className="text-lg mb-4">
              Caso o ascendente italiano tenha nascido ANTES de 1871, na Provincia di Treviso, o registro pesquisado é o BATTESIMO e se encontra em alguma igreja.
            </p>
            <p className="text-lg">
              A maioria das cidades possui mais de duas igrejas e no caso de Treviso seria necessário pesquisar em no mínimo 300 igrejas.Portanto essa busca é bem minuciosa e trabalhosa, para isso as informações familiares são se suma importância para lograr êxito.
            </p>
          </div>
        </div>
        <div className="w-full bg-second">
          <div className="max-w-6xl mx-auto py-16 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-5xl font-bold text-main mb-8">
                Portugal
              </h2>
              <p className="text-lg mb-4">
                Para que a busca de certidões em Portugal tenha sucesso é necessário reunir o maior número de informações possíveis do seu familiar português.
              </p>
              <p className="text-lg mb-4">
                Documentos anteriores ao ano de 1911 podem ser mais difíceis de encontrar, porque os assentos (certidões) eram paroquiais, ou seja, os registros dos cidadãos eram realizados nas paróquias/igrejas dos bairros/freguesias, onde eram feitos os batismos dos filhos e os casamentos.
              </p>
              <p className="text-lg mb-4">
                Já para a busca de certidões em Portugal a partir do ano de 1965, as informações são mais fáceis e normalmente já estão informatizadas.
              </p>
              <p className="text-lg mb-4">
                Para ter sucesso na busca das certidões dos seus antepassados, são necessárias algumas informações mínimas como:
              </p>
              <p className="text-lg">
                • Nome Completo do Português;
                • Data ou Ano aproximado de Nascimento;
                • Filiação (nome dos pais);
                • Local de Nascimento (distrito, conselho e freguesia/bairro).
              </p>
            </div>
            <div>
              <p className="text-lg mb-4">
                Lembrando que para os cidadãos nascidos antes de 1911, as buscas deverão ser feitas diretamente nos Arquivos Distritais, pois até este ano não existiam cartórios civis e os cidadãos portugueses eram registrados nas igrejas.
              </p>
              <p className="text-lg mb-4">
                Para começar o processo das certidões em Portugal e obter a sua cidadania portuguesa, a sua busca deve-se iniciar por estas informações através de outros documentos do seu familiar português, e na colheita de informações sobre seus antepassados.
              </p>
              <p className="text-lg mb-4">
                Quais as vantagens de buscar um profissional especializado, um advogado no caso?
              </p>
              <p className="text-lg mb-4">
                As empresas especializadas nesse serviço podem encurtar e muito esse processo por já terem experiência no assunto.
              </p>
              <p className="text-lg mb-4">
                O escritório coleta as informações com o descendente e realiza o serviço de pesquisa diretamente nos órgãos competentes (Arquivos Distritais e Conservatórias).
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=351939559818`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-main text-white inline-block py-3 px-8 uppercase font-medium rounded mt-4 hover:bg-white hover:text-main transition-all"
              >
                Fale Conosco
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <Slider {...settings} className="px-4 xl:px-0">            
              {testimonials.map((testimonial: Testimonial) => (
                <div key={testimonial.name} className="p-6">
                  <Testimonial testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { testimonials } = await getTestimonials()

  return {
    props: {
      data: JSON.stringify({
        footer,
        testimonials
      }) || null
    }
  }
}