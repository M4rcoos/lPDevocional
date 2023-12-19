import imgNovoTestamento from '../assetsPages/novoTestamento.jpeg'
import './nTestamento.css'

export const Ntestamento = () =>{
    return(
        <>
           <main>
            <div className="container-mainNovoTestamento">
                <div className="titles-init">
                    <h1 className="title">Panorama do Novo Testamento</h1>
                    <h2 className="subtitle">Começar a estudar nunca foi tão <span className="colorGreen">fácil</span> e <span className="colorRed">divertido</span>!</h2>
                </div>

                <div className="boxInformation">
                    <div className="text">
                        <ul>
                            <h3 className="title-ul">Estude Sobre:</h3>
                            <li>Período Interbíblico</li>
                            <li>Antiga e Nova Aliança</li>
                            <li>Os Saduceus, os Fariseus, os Zelotes, <br /> os Samaritamnos, e outros povos do N.T</li>
                            <li>Os Evangelhos Sinóticos</li>
                            <li>O Apóstolo Paulo e suas viagens missionárias</li>
                            <li>As Cartas Paulinas</li>
                            <li>As Cartas Gerais</li>
                            <li>Visão geral de Apocalipse</li>

                            <div className="btnCompra">
                                <a href="https://pay.hotmart.com/J88858218Y?bid=1702985106344">Quero adquirir o N.T</a>
                            </div>
                        </ul>

                    </div>

                    <div className="img">
                        <img src={imgNovoTestamento} alt="" />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}