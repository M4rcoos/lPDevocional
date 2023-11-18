import { Inicio } from './components/Inicio/Inicio'
import { Sobre } from './components/Sobre/Sobre'
import { Duvidas } from './components/Duvidas/Duvidas'
import { Bonus } from './components/Bonus/Bonus'
import './reset.css'
import { Organizaçao } from './components/Organização/Organização'
import { Materiais } from './components/Materiais/Materiais'
import { Feedback } from './components/Feedback/Feedback'

export const App = () =>{
   
    return(
        <>
    <Inicio/>
    <Sobre/>
    <Duvidas/>
    <Bonus/>
    <Organizaçao/>
    <Materiais/>
    <Feedback/>
    </>
    )
}