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

export const Combo = () =>{
    return(
        <>
        <main>
            <div className="container-mainCombo">

                <div className="boxText">
                    <h1>As parábolas resumidas e ilustradas  + <br /> Templates planner de estudo bíblico + <br />Panorama do Antigo Testamento + <br />Disciplinas biblicas</h1>

                    <span>De R$122,49</span>
                    <div>2x de R$41,74</div>

                    <p>ou á vista por  R$ 80,00</p>
                </div>


                <h1 className="parabolas">Parábolas</h1>
                <div className="containerImgsCarrossel">
                    
                    <img src={imgParabola1} alt="Imagem 1" />
                    <img src={imgParabola2} alt="Imagem 2" />
                    <img src={imgParabola3} alt="Imagem 3" />
                  </div>

                <h1 className="disciplinas">Disciplinas Bíblicas</h1>
                  <div className="containerImgsCarrossel">
                    <img src={imgDisciplina1} alt="Imagem 1" />
                    <img src={imgDisciplina2} alt="Imagem 2" />
                    <img src={imgDisciplina3} alt="Imagem 3" />
                  </div>

                <h1 className="testamento">Antigo Testamento</h1>
                  <div className="containerImgsCarrossel">
                    <img src={imgAT1} alt="Imagem 1" />
                    <img src={imgAT3} alt="Imagem 2" />
                    <img src={imgAT2} alt="Imagem 3" />
                </div>
                <div className="btnCompra">
                    <a href="">Quero Adquirir o Combo</a>
                </div>
            </div>
        </main>
        </>
    )
}