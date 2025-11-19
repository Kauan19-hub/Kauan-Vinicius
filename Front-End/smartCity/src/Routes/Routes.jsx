import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
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
    )
}

const Inicial = lazy(() => import("../Pages/Inicial"));
const Login = lazy(() => import("../Pages/Login"));
const Menu = lazy(() => import("../Components/Menu"))
 
export function Router() {
    return (
        <Suspense fallback={<p style={{ color: "#d21111", textAlign: "center", fontFamily: "Arial" }}>Carregando...</p>}>
            <Routes>
                <Route path="/" element={<Inicial />}>
                    <Route index element={<Inicio/>} />
                    <Route path="login"  element={<Login />} />
                    <Route path="menu" element={<Menu />} />
                </Route>
            </Routes>
        </Suspense>
    );
}