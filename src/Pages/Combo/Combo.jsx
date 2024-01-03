import './Combo.css'

import imgCapaAT from '../assetsPages/antigoTestamentoCarousel.jpg'
import imgCapaNT from '../assetsPages/novoTestamento.jpeg'
import imgCapaDisciplina from '../assetsPages/imgDisciplinaCapa.jpg'
import imgCapaParabola from '../assetsPages/imgParabolaCarousel.jpg'
import imgCapaEstudo from '../assetsPages/imgOrg1.jpg'
import imgCombo from '../assetsPages/imgComboCarousel.jpg'

export const Combo = () => {
  return (
    <>
      <main>
        <div className="container-mainCombo">
            <h1 className="title">Comece a estudar a bíblia hoje <br /> e <span className='colorGreen'>mude de vida</span>!</h1>

            <div className="boxInformation">
                    <div className="text">
                        <ul>
                            <h3 className="title-ul">Adquira todos os nossos <br /> materiais e estude sobre:</h3>
                            <li>Os 5 Ministérios</li>
                            <li>Dons do Espírito</li>
                            <li>Fruto do Espírio</li>
                            <li>As 12 tribos de Israel</li>
                            <li>+Todas as Parábolas da Bíblia</li>
                            <li>E muito mais...</li>
                        </ul>

                    </div>

                    <div className="img">
                        <img src={imgCombo} alt="" />
                    </div>
                </div>

        <section className="organizacao">

          <div className="boxText">
            <h1>As parábolas resumidas e ilustradas  + <br /> Templates planner de estudo bíblico + <br />Panorama do Antigo Testamento + <br />Disciplinas biblicas + <br />Panorama do Novo testamento</h1>

            <span>De R$142,49</span>
            <div>2x de R$47,50</div>

            <p>ou á vista por  R$ 95,00</p>
          </div>
          <section className="organizacao">
            <div className="container-organizacao">

              <div className="boxImg" data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={imgCapaAT} alt="" />
                <img src={imgCapaNT} alt="" />
                <img src={imgCapaDisciplina} alt="" />
                <img src={imgCapaParabola} alt="" />
                <img src={imgCapaEstudo} alt="" />
              </div>


{/* 
             <div style={{display:'flex',alignItems:'center', justifyContent:"center"}}>
             <div className="btnCompra">
                <a href="https://pay.hotmart.com/Y78270774I?checkoutMode=10&bid=1701088770353">Quero Adquirir o Combo</a>
              </div>
             </div> */}
             


            </div>
          </section>
          <div className="boxText">
            <h1>As parábolas resumidas e ilustradas  + <br /> Templates plano de estudo bíblico + <br />Panorama do Antigo Testamento + <br />Disciplinas biblicas +  <br />Panorama do Novo testamento</h1>

            <span>De R$142,49</span>
            <div>2x de R$47,50</div>

            <p>ou á vista por  R$ 95,00</p>
          </div>
             
          <div className="btnCompra">
            <a href="https://pay.hotmart.com/Y78270774I?checkoutMode=10&bid=1701088770353">Eu quero começar a estudar a bíblia</a>
            </div>
        </div>
      </main>
    </>
  )
}