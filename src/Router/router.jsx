import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Parabola } from "../Pages/Parabola/Parabola";
import { Atestamento } from "../Pages/AntigoTestamento/aTestamento";
import { Disciplina } from "../Pages/Disciplinas/Disciplinas";
import { App } from "../App";
import { Combo } from "../Pages/Combo/Combo";
import { Ntestamento } from "../Pages/NovoTestamento/nTestamento";
import { Combopanorama } from "../Pages/ComboPanoramas/comboPanorama";

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
        path : '/nTestamento',
        element : <Ntestamento/>
    },
    {
        path : '/Disciplinas',
        element : <Disciplina/>
    },
    {
        path : '/comboPanorama',
        element : <Combopanorama/>
    },
    {
        path : '/Combo',
        element : <Combo/>
    },
    ]);

    return(
        <>
        <RouterProvider 
        router={routes}
        />
        </>
    )
}