import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Materiais.css';
import { Link } from 'react-router-dom';
import imgDisciplinaCarousel from '../assets/imgDisciplinaCarousel.jpg'
import imgAntigoTestamentoCarousel from '../assets/antigoTestamentoCarousel.jpg'
import imgParabolaCarousel from '../assets/imgParabolaCarousel.jpg'
import imgComboCarousel from '../assets/imgComboCarousel.jpg'
import imgComboPanoramas from '../assets/comboPanoramas.jpeg'
import imgNovoTestamento from '../assets/novoTestamento.jpeg'

export const Materiais = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <>



      <section className="materiais">
        <h1 className="title" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">Adquira nossos materiais 😀</h1>
        <div className="container-materiais">

          <div className="carousel">


            <Slider {...settings}
            >

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div class="mais-vendido-etiqueta">MAIS VENDIDO</div>

                <img src={imgComboCarousel} alt="" />
                <p class="preco-de">De: <span class="valor-original">142,49</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">49,57 <span class="qntd-parcela">2x</span></span></p>

                <footer>
                  <span>Compre 1 Leve 5</span>
                  <div className="btnCompra">
                    <Link to="/Combo" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                 <div class="mais-vendido-etiqueta">Economize R$: 14,94</div>
                <img src={imgComboPanoramas} alt="" />
                <p class="preco-de">De: <span class="valor-original">39,94</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">25,00 </span></p>
                <footer>
                  <span>Combo Panoramas</span>
                  <div className="btnCompra">
                    <Link to="/comboPanorama" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                 <div class="mais-vendido-etiqueta">Economize R$: 32,41</div>
                <img src={imgParabolaCarousel} alt="" />

                <p class="preco-de">De: <span class="valor-original">119,90</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">45,65 <span class="qntd-parcela">2x</span></span></p>
                <footer>
                  <span>Parábolas Bíblicas</span>
                  <div className="btnCompra">
                    <Link to="/Parabolas" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                   <div class="mais-vendido-etiqueta">Economize R$: 10,02</div>
                <img src={imgAntigoTestamentoCarousel} alt="" />

                <p class="preco-de">De: <span class="valor-original">29,99</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">19,97</span></p>
                <footer>
                  <span>Antigo Testamento</span>
                  <div className="btnCompra">
                    <Link to="/aTestamento" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                   <div class="mais-vendido-etiqueta">Economize R$: 10,02</div>

                <img src={imgNovoTestamento} alt="" />
                <p class="preco-de">De: <span class="valor-original">29,99</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">19,97</span></p>
                <footer>
                  <span>Novo Testamento</span>
                  <div className="btnCompra">
                    <Link to="/nTestamento" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>

             

              <div className="Box"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                   <div class="mais-vendido-etiqueta">Economize R$: 19,99</div>

                <img src={imgDisciplinaCarousel} alt="" />
                <p class="preco-de">De: <span class="valor-original">39,99</span></p>
                <p class="preco-por">Por: <span class="valor-desconto">10,44 <span class="qntd-parcela">2x</span></span></p>
                <footer>
                  <span>Disciplinas Bíblicas</span>
                  <div className="btnCompra">
                    <Link to="/Disciplinas" target="_blank">Saiba Mais</Link>
                  </div>
                </footer>
              </div>





            </Slider>
          </div>
        </div>


      </section>
    </>
  );
};
