import './Sobre.css'
import { Card } from './Card/Card'
import imgSobre1 from '../assets/imgSobre1.svg'
import imgSobre2 from '../assets/imgSobre2.svg'
import imgSobre3 from '../assets/imgSobre3.svg'

export const Sobre = () =>{
    return(
        <>
        <section className="sobre" id="sobre">
        <h1 className='title'>Por quê adquirir um Ebook digital?</h1>
            <div className="container-sobre">
                
                <Card 
                titulo="Sem perda de tempo"
                descrição="Entrega imediata após confirmação do pagamento (você não precisará esperar semanas para começar a estudar).

                Você pode acessar o material e estudar quando e onde quiser!  Ou imprimir se desejar...
                "
                img={imgSobre1}
                />
                <Card
                titulo="Ensino didático"
                descrição="Por serem desenvolvidos com imagens, desenhos e formas geométricas, os resumos são os materiais mais didáticos para quem quer aprender de verdade"
                img={imgSobre2}
                />
                <Card
                titulo="Facíl compreenção para os novos na fé"
                descrição="Sem palavras dificies ou termos teológicos. Facíl compreensão especialmente para quem é novo na fé."
                img={imgSobre3}
                />

            </div>
        </section>
        </>
    )
}