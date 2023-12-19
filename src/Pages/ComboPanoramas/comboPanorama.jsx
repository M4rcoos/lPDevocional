import imgComboPanorama from '../assetsPages/comboPanoramas.jpeg'
import imgAtestamento from '../assetsPages/antigoTestamentoCarousel.jpg'
import imgNtestamento from '../assetsPages/novoTestamento.jpeg'
import './comboPanoramas.css'


export const Combopanorama = () =>{
    return(
        <>
        <main>
            <div className="container-mainComboPanorama">
                <h1 className="title">Comece a ler a bíblia de forma organizada</h1>

                <div className="boxInformation">
                        <div className="text">
                            <ul>
                                <h3>Estude Sobre:</h3>
                                <li>Antiga e Nova Aliança</li>
                                <li>Os Saduceus, os Fariseus, <br />os Zelotes, os Samaritanos, e outros povos do N.T</li>
                                <li>Os Evangelhos Sinóticos</li>
                                <li>O Apóstolo Paulo e suas Viagens Missionárias</li>
                                <li>Visão geral de Apocalipse</li>
                                <li>As 12 Tribos de Israel</li>
                                <li>A história de Israel</li>
                                <li>Período Monarca</li>
                                <li>Reino Unido e Dividido</li>
                                <li>Os Patriarcas</li>
                                <li>E mais...</li>

                                <div className="btnCompra">
                                    <a href="https://pay.hotmart.com/F88858717Q?bid=1702985011193">Quero adquirir o Combo Panoramas</a>
                                </div>
                            </ul>

                        </div>

                        <div className="img">
                            <img src={imgComboPanorama} alt="" />
                        </div>
                </div>
                <div className="containerImgsCarrossel">
                    <img src={imgAtestamento} alt="Imagem 1" />
                    <img src={imgNtestamento} alt="Imagem 2" />
                </div>
            </div>
        </main>
        </>
    )
}