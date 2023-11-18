import './Inicio.css'
import imgInicio from '../assets/imgInicial.png'
export const Inicio = () =>{
    return(
        <>
        <section className="inicio" id="inicio">
            <div className="container-inicio">
                <p>Comece a estudar a bíblia de maneira <span>simples e divertida</span></p>
                <img src={imgInicio} alt="" />
            </div>
        </section>
        </>
    )
}