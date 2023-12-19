import './Bonus.css'
import imgBonus from '../assets/imgBonus.png'

export const Bonus = () =>{
    return(
        <>
        <section className='bonus' id='bonus'>
            <div className="container-bonus">
                <div className="boxText"  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <h1>Sempre quis começar a estudar a bíblia, mas não sabia <span>como e por onde começar</span></h1>
                    <br />
                    <p>Então depois de muita pesquisa e conselhos, comecei a estudar a bíblia pelas parábolas e foi a melhor coisa que fiz. <b>Comecei a ter constância na leitura bíblica</b>, me apaixonei pela palavra, e até hoje busco me aprofundar cada dia mais nela.. <b>quem diria que estudar as parábolas seria o primeiro grande passo e o mais importânte da minha caminhada cristã...</b></p>
                </div>

                <img src={imgBonus} alt="" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine"/>
            </div>
        </section>
        </>
    )
}