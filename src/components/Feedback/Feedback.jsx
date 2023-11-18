import './Feedback.css'
import imgFeedback from '../assets/imgFeedback.jpeg'
import imgFeedback2 from '../assets/imgFeedback1.jpeg'
import imgFeedback3 from '../assets/imgFeedback3.jpeg'
import imgFeedback4 from '../assets/imgFeedback4.jpeg'

export const Feedback  = () =>{
    
    return(
        <>
        <section className="feedback">
            <h1 className="title">Feeedbacks de quem ja adquiriu!!</h1>
            <div className="container-feedback">
                <div className="container-box">
                    <div className="box"><img src={imgFeedback} alt="" /></div>
                    <div className="box"><img src={imgFeedback2} alt="" /></div>
                    <div className="box"><img src={imgFeedback3} alt="" /></div>
                    <div className="box"><img src={imgFeedback4} alt="" /></div>
                </div>
            </div>
        </section>
        </>
    )
}