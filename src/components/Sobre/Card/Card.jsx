import './Card.css'

export const Card = ({titulo, descrição, img}) =>{
    return(
        <>
        <div className="container-card" 
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        >
            <img src={img} alt="" />
            <h1>{titulo}</h1>
            <p>{descrição}</p>
        </div>
        </>
    )
}