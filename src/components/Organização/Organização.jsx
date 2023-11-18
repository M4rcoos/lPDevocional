import './Organização.css'
import imgOrg1 from '../assets/imgOrg1.jpg'
import imgOrg2 from '../assets/imgOrg2.jpg'
import imgOrg3 from '../assets/imgOrg3.jpg' 


export const Organizaçao = () =>{
    return(
        <>
        <section className="organizacao">
            <h1 className="title">Organize seus estudos!!</h1>
            <div className="container-organizacao">
                <div className="boxText">
                    <p>Adquirindo o e-book Parábolas resumidas e ilustradas, <span>você leva gratuitamente</span> 4 templates para se organizar melhor e estudar a bíblia todos os dias, dê adeus à <span>inconstância e procrastinação</span>. Comece hoje a viver o novo de Deus na sua vida!!</p>
                </div>

                <div className="boxImg">
                    <img src={imgOrg1} alt="" />
                    <img src={imgOrg2} alt="" />
                    <img src={imgOrg3} alt="" />
                </div>

                <div className="btnGarantia">
                    <h1>Garantia de 7 dias!!!</h1>
                </div>
            </div>
        </section>
        </>
    )
}