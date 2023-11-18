import './Card.css'

export const Card = ({titulo, descrição, img}) =>{
    return(
        <>
        <div className="container-card">
            <img src={img} alt="" />
            <h1>{titulo}</h1>
            <p>{descrição}</p>
        </div>
        </>
    )
}