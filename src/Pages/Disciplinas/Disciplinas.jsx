import './Disciplinas.css'
import imgDisciplinaCapa from '../assetsPages/imgDisciplinaCapa.jpg'
import imgDisciplina1 from '../assetsPages/imgDisciplina1.jpg'
import imgDisciplina2 from '../assetsPages/imgDisciplina2.jpg'
import imgDisciplina3 from '../assetsPages/imgDisciplina3.jpg'

export const Disciplina = () =>{
    return(
        <>
       <main>
        <div className="container-main">
            <h1 className="title titleDisciplina"><span>Conhecimentos básicos</span> para você  que quer <span>começar a estudar</span></h1>
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
                                <a href="https://pay.hotmart.com/P81375389G?bid=1701088716249">Quero Adquirir as Disciplina Bíblicas</a>
                            </div>
                        </ul>

                    </div>

                    <div className="img">
                        <img src={imgDisciplinaCapa} alt="" />
                    </div>
                </div>

                
                <div className="containerImgsCarrossel">
                    <img src={imgDisciplina1} alt="Imagem 1" />
                    <img src={imgDisciplina2} alt="Imagem 2" />
                    <img src={imgDisciplina3} alt="Imagem 3" />
                </div>
        </div>
       </main>
        </>
    )
}