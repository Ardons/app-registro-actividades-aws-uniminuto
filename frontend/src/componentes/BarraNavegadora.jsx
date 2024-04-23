import React from "react";
import "./BarraNavegadora.css";
import { FaCheckCircle } from "react-icons/fa";

function BarraNavegadora() {

    function loginVista(){
        window.location= "/";
    }

    function actividadesVista(){
        window.location= "/actividades";
    }
    
    function registroVista(){
        window.location= "/registrar";
    }

    return(
        <div className="Contenedor-barra-navegadora">
            <div className="Item-barra-navegador" onClick={loginVista}>
                <p>Login</p>
            </div>

            <div className="Item-barra-navegador" onClick={actividadesVista}>
                <p>Actividades</p>
            </div>

            <div className="Item-barra-navegador" onClick={registroVista}>
             <p>Registrar</p>
            </div>
            <div className="Contenedor-Icono-barra-navegadora">
                <FaCheckCircle
                fill="white" 
                />
            </div>
            
        </div>
        
    )
}

export {BarraNavegadora};