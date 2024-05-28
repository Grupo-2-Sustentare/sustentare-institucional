import React from "react";
import Index from "./index/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={Index}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;