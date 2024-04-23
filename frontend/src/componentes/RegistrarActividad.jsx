import React from "react";

function RegistrarActividad () {

    return(
        <div id="contenedor-fomuliario-registro" class="formulario-ingreso-datos">
        <form id="formulario-registro">
            <h2>Añade una Actividad</h2>

            <div class="input-box">
                <label for="nombre">Actividad</label>
                <input type="text" id="nombre" name="nombre" required />
            </div>

            <div class="input-box">
                <label for="fecha">Fecha</label>
                <input type="date" id="fecha" name="fecha" />
            </div>


        </form>


    </div>
    )

}

export {RegistrarActividad};