import './Feedback.css'
import imgFeedback from '../assets/imgFeedback.jpeg'
import imgFeedback2 from '../assets/imgFeedback1.jpeg'
import imgFeedback3 from '../assets/imgFeedback3.jpeg'
import imgFeedback4 from '../assets/imgFeedback4.jpeg'

export const Feedback = () => {

    return (
        <>
            <section className="feedback">
                <h1 className="title"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >Feeedbacks de quem ja adquiriu!!</h1>
                <div className="container-feedback">
                    <div className="container-box">
                        <div className="box"
<<<<<<< HEAD
                            data-aos="fade-up"
=======
                            data-aos="fade-right"
>>>>>>> main
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        ><img src={imgFeedback} alt="" /></div>
                        <div className="box"
<<<<<<< HEAD
                           data-aos="fade-up"
=======
                            data-aos="fade-left"
>>>>>>> main
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        ><img src={imgFeedback2} alt="" /></div>
                        <div className="box"
<<<<<<< HEAD
                            data-aos="fade-up"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"><img src={imgFeedback3} alt="" /></div>
                        <div className="box"
                          data-aos="fade-up"
=======
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"><img src={imgFeedback3} alt="" /></div>
                        <div className="box"
                            data-aos="fade-left"
>>>>>>> main
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"><img src={imgFeedback4} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}