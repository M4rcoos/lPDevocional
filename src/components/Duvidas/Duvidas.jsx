import './Duvidas.css'
import imgDuvida1 from '../assets/duvidas1.png'
import imgDuvida2 from '../assets/duvidas2.png'

export const Duvidas = () =>{
    return(
        <>
        <section className="duvidas" id="duvidas">
            <h1 className="title">Dúvidas Frequentes</h1>
            <div className="container-duvidas">
<<<<<<< HEAD
                <img src={imgDuvida1} alt="" data-aos="fade-up"
data-aos-offset="300"
data-aos-easing="ease-in-sine"/>
                <img src={imgDuvida2} alt=""data-aos="fade-up"
=======
                <img src={imgDuvida1} alt="" data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine"/>
                <img src={imgDuvida2} alt=""data-aos="fade-left"
>>>>>>> main
data-aos-offset="300"
data-aos-easing="ease-in-sine" />
            </div>
        </section>
        </>
    )
}