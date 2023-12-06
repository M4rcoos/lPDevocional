import './Profile.css'

import profile from '../assets/profile.png'

export const Profile = () => {
  return (
    <>
      <section className='profile' id='profile'>

        <div className='contenti-mage' >
        <img src={profile} alt=""
          />
        </div>
     
        <div className="container-profile">
          <div className="boxText" >
            <h1>QUEM É O CRENTE NOTA 10?</h1>
            <br />
            <p>Me chamo Tay, sou estudante de teologia e apaixonada pela palavra dêsde 2020. dona do ig @crentenota10, busco incentivar as pessoas a estudarem a palavra compartilhando nas redes sociais minha rotina de estudos, e produzindo materias que possam facilitar o começo de todos que querem começar a estudar a bíblia, mas não têm condições financeiras para arcar com livros acadêmicos de teologia, ou não conseguem se adaptar com a linguagem robusca deles.
              vamos estudar a bíblia juntos?</p>
          </div>
        </div>
      </section>
    </>
  )
}