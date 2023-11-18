import './Parabola.css'
import imgPrincipal from '../assetsPages/imgPrincipalParabola.png'
import imgParabola1 from '../assetsPages/imgParabola1.png'
import imgParabola2 from '../assetsPages/imgParabola2.png'
import imgParabola3 from '../assetsPages/imgParabola3.png'


export const Parabola = () =>{
    return(
        <>
        
        <main>
            <div className="container-mainParabola">
                <h1 className="title">Estude da maneira que achar melhor!!!</h1>
                <div className="containerImgPrincipal">
                  <img src={imgPrincipal} alt="" />
                </div>
                  <footer>
                <div className="boxText">
                    <h1>O acesso ao material é imediato <br /> <span>Comece</span> a estudar agora!</h1>
                    <p>chega de deixar sempre para depois e <br /><b>negligenciar</b> sua vida espiritual</p>
                </div>
                <div className="btnCompra">
                    <a href="">Quero Adquirir as Parábolas</a>
                </div>
                
                </footer>
                
                  <div className="containerImgsCarrossel">
                    <img src={imgParabola1} alt="Imagem 1" />
                    <img src={imgParabola2} alt="Imagem 2" />
                    <img src={imgParabola3} alt="Imagem 3" />
                  </div>
                
            </div>
        </main>
        
        </>
    )
}