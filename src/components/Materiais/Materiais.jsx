import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Materiais.css';
import { Link } from 'react-router-dom';
import imgDisciplinaCarousel from '../assets/imgDisciplinaCarousel.jpg'
import imgAntigoTestamentoCarousel from '../assets/antigoTestamentoCarousel.jpg'
import imgParabolaCarousel from '../assets/imgParabolaCarousel.jpg'
import imgComboCarousel from '../assets/imgComboCarousel.jpg'

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
        <h1 className="title"  data-aos="fade-up"
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
        <img src={imgParabolaCarousel} alt="" />
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
        <img src={imgAntigoTestamentoCarousel} alt="" />

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
       data-aos-easing="ease-in-sine"
      >
        <img src={imgDisciplinaCarousel} alt="" />

        <footer>
        <span>Disciplinas Bíblicas</span>
        <div className="btnCompra">
          <Link to="/Disciplinas" target="_blank">Saiba Mais</Link>
        </div>
        </footer>
      </div>

      <div className="Box"
       data-aos="fade-left"
       data-aos-offset="300"
       data-aos-easing="ease-in-sine"
      >
        <img src={imgComboCarousel} alt="" />

        <footer>
        <span>Aproveite o Combo</span>
        <div className="btnCompra">
          <Link to="/Combo" target="_blank">Saiba Mais</Link>
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
