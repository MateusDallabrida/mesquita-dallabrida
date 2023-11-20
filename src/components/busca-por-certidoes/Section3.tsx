import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from '@/components/Testimonial'
import { CustomPrevArrow, CustomNextArrow } from '@/components/CarouselCustoms'


interface Testimonial {
  name: string
  star: number
  description: string
  image: {
    url: string
  }
}

interface Props {
  testimonials: Testimonial[]
}

export function Section3({ testimonials }: Props) {
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
  )
}
