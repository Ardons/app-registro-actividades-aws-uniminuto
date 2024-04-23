import "./ActCreateButton.css";

function ActCreateButton () {
    function botonVista() {
        window.location = "/registrar";
    }
    return(
        <button className="agregar-actividad" onClick={botonVista}>
            Añadir Actividad
        </button>
    )
}

export {ActCreateButton};