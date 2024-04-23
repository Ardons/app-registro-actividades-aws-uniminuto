import React from "react";
import "./LoginApp.css";

function LoginApp() {
    return(
        <div id="contenedor-fomuliario-registro" class="formulario-ingreso-datos">
            <form id="formulario-registro">
                <h2>Formulario de Ingreso</h2>

                <div class="input-box">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>

                <div class="input-box">
                    <label for="correo">Correo</label>
                    <input type="email" id="correo" name="correo" />
                </div>

                <div class="input-box">
                    <label for="nombre">Clave</label>
                    <input type="text" id="clave" name="clave" required />
                </div>

                <div class="botones-formulario">
                  <button id="boton-form-enviar" class="boton-enviar-form">Ingresar</button>

                </div>


            </form>


        </div>

    )
}

export {LoginApp};