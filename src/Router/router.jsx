import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Parabola } from "../Pages/Parabola/Parabola";
import { Atestamento } from "../Pages/AntigoTestamento/aTestamento";
import { Disciplina } from "../Pages/Disciplinas/Disciplinas";
import { App } from "../App";
import { Combo } from "../Pages/Combo/Combo";

export const Routes = () =>{
    const routes = createBrowserRouter([{
        path : '/',
        element : <App/>

    },
    {
        path : '/Parabolas',
        element : <Parabola/>
    },
    {
        path : '/aTestamento',
        element : <Atestamento/>
    },
    {
        path : '/Disciplinas',
        element : <Disciplina/>
    },
    {
        path : '/Combo',
        element : <Combo/>
    }
    ]);

    return(
        <>
        <RouterProvider 
        router={routes}
        />
        </>
    )
}