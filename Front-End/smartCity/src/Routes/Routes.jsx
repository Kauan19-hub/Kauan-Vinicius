import { Routes, Route } from "react-router-dom";
import { Menu } from "../Components/Menu";
import { Inicial } from "../Pages/Inicial";
import { Login } from "../Pages/Login";

export function Router(){
    return(
         <Routes>
            <Route path="/" element={<Login />} />
                <Route path="/inicial" element={<Inicial />} >
                <Route index element={<Menu />} /> 
            </Route>
        </Routes>
    );
}