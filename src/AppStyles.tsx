import styled from 'styled-components'
import fire from "./assets/foguinho.png"
import flash from "./assets/raio.png"
import heart from "./assets/tres-coracoes.png"
import createdBy from "./assets/createdBy.png"
import biblia from "./assets/biblia.png"


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 34px;
height:100%
`
export const Content = styled.main`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 max-width: 64.375rem;
 @media (max-width: 1200px) {
  max-width: 44.375rem;
}
`
export const Header = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 width:100%;
 margin-bottom: -100px;

`
export const Footer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
margin-top: -45px;

`
export const Enquete = styled.div`
margin-top: 195px;
display:flex;
flex-direction: column;
gap:56px;
align-items: center;

justify-content: center;

`

export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
font-size:xx-large;
font-size: 5.6rem;
text-align: center;
color:#000;
`
export const TextParabolas = styled.div`
    display:flex;
    gap:32px;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center ;

`

export const Motivos = styled.div`
    display:flex;
    gap:16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
@media (max-width: 1200px) {
  font-size: 3.6rem;
}
@media (max-width: 600px) {
  font-size: 2.6rem;
max-width: 400px;

}
`
export const ImageFire = styled.img.attrs({
  src: `${fire}`,
  width:120,
}
)`
@media (max-width: 1200px) {
  max-width: 80px;

}
`
export const ImageFlash = styled.img.attrs({
  src: `${flash}`,
  width:120,

})`
@media (max-width: 1200px) {
  max-width: 80px;

}
`
export const ImageHeart = styled.img.attrs({
  src: `${heart}`,
  width:200,

})`
@media (max-width: 1200px) {
  max-width: 160px;

}
`
export const Biblia = styled.img.attrs({
  src: `${biblia}`,
  width:200,
  
})`
@media (max-width: 1200px) {
  max-width: 160px;

}
`
export const CreatedBy = styled.img.attrs({
  src: `${createdBy}`,
  width:250,
})`
@media (max-width: 1200px) {
  max-width: 210px;
}
`
export const Organization = styled.div`
  
`