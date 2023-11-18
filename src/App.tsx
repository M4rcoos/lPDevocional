
import * as C from "./AppStyles.tsx"
import { ButtonLarger } from "./components/ButtonLarger"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


function App() {
  const dataSocialProva = [
    { id: "1", image: 'src/assets/provaSocial (1).jpeg' },
    { id: "2", image: "src/assets/provaSocial (2).jpeg" },
    { id: "3", image: "src/assets/provaSocial (3).jpeg" },
    { id: "3", image: "src/assets/provaSocial (4).jpeg" }
  ]

  return (
    <>
    
    
    <C.Container>
      <C.Content  >
        <C.Header>
          <C.ImageFire />
          <div className="flash" style={{ marginBottom: -45 }}>
            <C.ImageFlash />
          </div>
        </C.Header>
        <C.Title>
          Estude a bíblia de maneira simples e divertida
        </C.Title>
        <C.Footer>

          <C.ImageHeart />
          <C.Biblia />
          <C.CreatedBy />
        </C.Footer>
      </C.Content>
      <C.Enquete >
        <img src="src/assets/enquete00.png" width={480} alt="Enquete instagram" data-aos="fade-right"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine" />
        <img src="src/assets/enquete01.png" width={480} alt="Enquete instagram" data-aos="fade-left"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine"/>
      </C.Enquete>
      <C.TextParabolas>
        <img src="src/assets/imgfirstText-removebg-preview.png" alt="tres corações" data-aos="fade-up-right"  data-aos-offset="400"
     data-aos-easing="ease-in-sine"/>
        <img src="src/assets/description_parabolas-removebg-preview.png" alt="tres corações" data-aos="fade-up-left"  data-aos-offset="400"
     data-aos-easing="ease-in-sine"/>
      </C.TextParabolas>
      <ButtonLarger name="Porquê adquirir um ebook digital?" data-aos="flip-down" data-aos-offset="400"
     data-aos-easing="ease-in-sine" />
      <C.Motivos>
        <div>
          <img src="src/assets/01-removebg-preview.png" />
        </div>
        <div>
          <img src="src/assets/02-removebg-preview.png" />
        </div>
        <div>
          <img src="src/assets/03-removebg-preview.png" />
        </div>
      </C.Motivos>

      < C.OrganizationMain>
        <C.Organization>
          <C.BtnAndImage>
            <img style={{ marginRight: 50 }} src="src/assets/space.png" width={160} />
          </C.BtnAndImage>
          <div >
            <ButtonLarger name="Organize seus estudos!!" />
          </div>
        </C.Organization>
        <C.ContentOrganization>
          adquirindo o e-book Parábolas resumidas e ilustradas, <span style={{ color: "#829CFF" }}>você leva gratuitamente
          </span> 4 templates para se organizar melhor e estudar a bíblia todos os dias, dê adeus à <span style={{ color: "#FF4F63" }}> inconstância e procrastinação.
          </span> Comece hoje a viver o novo de Deus na sua vida!!

        </C.ContentOrganization>
        <C.ContentImagesStudy>

          <img style={{ marginRight: 50, height: 480 }} src="src/assets/estudoBiblico.png" />
          <img style={{ marginRight: 50, maxHeight: 480 }} src="src/assets/estudoBiblico02.png" />
          <img style={{ marginRight: 50, maxHeight: 480 }} src="src/assets/estudoBiblico03.png" />
        </C.ContentImagesStudy>
        <img style={{ marginTop: 60, maxHeight: 380 }} src="src/assets/provaSocialTitle-removebg-preview.png" />

      
        <C.ContentImgCarrousel>
      
       
              
         
          </C.ContentImgCarrousel>
      </C.OrganizationMain>

     
      {/* <Swiper
          // install Swiper modules
          slidesPerView={1}
          navigation
        >
          {
            dataSocialProva.map((data) => (
              
              <SwiperSlide key={data.id}>
                <C.ContentImgCarrousel>
                <img src={data.image} alt="Slider" />
              </C.ContentImgCarrousel>
              </SwiperSlide>
            ))
          }
          ...
        </Swiper> */}
    </C.Container>

    </>
  )
}

export default App
