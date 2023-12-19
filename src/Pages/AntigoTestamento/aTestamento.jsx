import './aTestamento.css'
import imgInformation from '../assetsPages/imgInformation.png'
import imgAT1 from '../assetsPages/imgAT.png'
import imgAT2 from '../assetsPages/imgAT2.png'
import imgAT3 from '../assetsPages/imgAT3.png'

export const Atestamento = () =>{
    return(
        <>
        <main>
            <div className="container-main">
                <h1 className="title">Você <span>nunca Mais</span> vai parar de ler e <span className='colorGreen'>desistir do antigo testamento</span> porque não está entendendo nada</h1>
                <div className="boxInformation">
                    <div className="text">
                        <ul>
                            <li>Entenda de uma vez a história de Israel</li>
                            <li>Como Surgiram os Patriarcas, quem eles são</li>
                            <li>A divisão das 12 tribos de Israel</li>
                            <li>O período da monarquia</li>
                            <li>Reino unido e dividido</li>
                            <li>O que aconteceu no período de Juízes</li>
                            <li>Quais são as divisões da biblía e mais...</li>

                            <div className="btnCompra">
                                <a href="https://pay.hotmart.com/R77793302U?bid=1701088683776">Quero adquirir o A.T</a>
                            </div>
                        </ul>

                    </div>

                    <div className="img">
                        <img src={imgInformation} alt="" />
                    </div>
                </div>
    
                
                <div className="containerImgsCarrossel">
                    <img src={imgAT1} alt="Imagem 1" />
                    <img src={imgAT3} alt="Imagem 2" />
                    <img src={imgAT2} alt="Imagem 3" />
                </div>
            </div>
        </main>
        </>
    )
}