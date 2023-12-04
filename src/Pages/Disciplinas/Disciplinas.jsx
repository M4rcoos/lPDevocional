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
                            <li>Oração</li>
                            <li>Jejum</li>
                            <li>batismo nas águas</li>
                            <li>Santa ceia</li>
                            <li>Adoração</li>
                            <li>Plano de salvação</li>
                            <li>Os 5 ministério</li>
                            <li>Dons do espírito</li>
                            <li>Maldição hereditária</li>
                            <li>Fruto do espírito</li>
                            <li>Pecado</li>
                            <li>Idolatria</li>
                            <li>A morte</li>

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