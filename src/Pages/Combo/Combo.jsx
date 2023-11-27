import './Combo.css'
import imgDisciplina1 from '../assetsPages/imgDisciplina1.jpg'
import imgDisciplina2 from '../assetsPages/imgDisciplina2.jpg'
import imgDisciplina3 from '../assetsPages/imgDisciplina3.jpg'

import imgAT1 from '../assetsPages/imgAT.png'
import imgAT2 from '../assetsPages/imgAT2.png'
import imgAT3 from '../assetsPages/imgAT3.png'

import imgParabola1 from '../assetsPages/imgParabola1.png'
import imgParabola2 from '../assetsPages/imgParabola2.png'
import imgParabola3 from '../assetsPages/imgParabola3.png'

export const Combo = () => {
  return (
    <>
      <main>
        <div className="container-mainCombo">

          <div className="boxText">
            <h1>As parábolas resumidas e ilustradas  + <br /> Templates planner de estudo bíblico + <br />Panorama do Antigo Testamento + <br />Disciplinas biblicas</h1>

            <span>De R$122,49</span>
            <div>2x de R$41,74</div>

            <p>ou á vista por  R$ 80,00</p>
          </div>
          <section className="organizacao">
            <div className="container-organizacao">
              <h1 className="text-title">Parábolas</h1>

              <div className="boxImg" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={imgParabola1} alt="" />
                <img src={imgParabola2} alt="" />
                <img src={imgParabola3} alt="" />
              </div>
              <h1 className="text-title">Antigo testamento</h1>

              <div className="boxImg" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={imgAT1} alt="" />
                <img src={imgAT2} alt="" />
                <img src={imgAT3} alt="" />
              </div>
              <h1 className="text-title">Disciplinas bíblica</h1>

              <div className="boxImg" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={imgDisciplina1} alt="" />
                <img src={imgDisciplina2} alt="" />
                <img src={imgDisciplina3} alt="" />
              </div>

             <div style={{display:'flex',alignItems:'center', justifyContent:"center"}}>
             <div className="btnCompra">
                <a href="https://pay.hotmart.com/Y78270774I?checkoutMode=10&bid=1701088770353">Quero Adquirir o Combo</a>
              </div>
             </div>
             


            </div>
          </section>

        </div>
      </main>
    </>
  )
}