import { Route, Routes } from "react-router-dom";
import NuevoPlan from "../components/nuevoplan/NuevoPlan";
import InicioCompleta from "../components/inicioCompleta/InicioCompleta";


const Router = ()=>{
    return(
        <Routes>
            <Route path='/' element={<InicioCompleta/>} />
            <Route path='/nuevoplan' element={<NuevoPlan/>}/>
        </Routes>
    )
};

export default Router;