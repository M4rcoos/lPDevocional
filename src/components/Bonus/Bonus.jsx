import './Bonus.css'
import imgBonus from '../assets/imgBonus.png'

export const Bonus = () =>{
    return(
        <>
        <section className='bonus' id='bonus'>
            <div className="container-bonus">
                <div className="boxText">
                    <h1>Sempre quis começar a estudar a biblia, mas não sabia <span>como e por onde começar</span></h1>
                    <br />
                    <p>Então depois de muita pesquisa e conselhos, comecei a estudar a biblia pelas parábolas e foi a melhor coisa que fiz. <b>Comecei a ter constância na leitura biblica</b>, me apaixonei pela palavra, e até hoje busco me aprofundar cada dia mais nela.. <b>quem diria que estudar as parábolas seria o primeiro grande passo e o mais importânte da minha caminhada cristã...</b></p>
                </div>

                <img src={imgBonus} alt="" />
            </div>
        </section>
        </>
    )
}