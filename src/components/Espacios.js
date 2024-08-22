import { React, useState } from "react";
import "./styles/Espacios.css";

function Espacios({nombreUsuario, listaEquipos, handleNombreEspacio}) {

    const [espacioSeleccionado, setEspacioSeleccionado] = useState(`Espacio de ${nombreUsuario}`);

    const handleEspacioSeleccionado = (nombreEspacio) => {
        setEspacioSeleccionado(nombreEspacio);
    }

    return (
        <div className="contenedor-espacios">
            <p className="titulo-espacio">Mi Espacio</p>
            <div>
                <button className="espacio" onClick={()=>(handleNombreEspacio(`Espacio de ${nombreUsuario}`, handleEspacioSeleccionado(`Espacio de ${nombreUsuario}`)))} style={espacioSeleccionado === `Espacio de ${nombreUsuario}` ? {"border": "3px solid #71475E"} : {}}>
                Espacio de {nombreUsuario}
                </button>
            </div>
            <hr></hr>
            <p className="titulo-espacio">Equipos</p>
            <div className="listado-equipos">
                {listaEquipos.map((equipo, index) => {
                return <button className="espacio" onClick={()=>(handleNombreEspacio(equipo.nombre), handleEspacioSeleccionado(equipo.nombre))} style={espacioSeleccionado === equipo.nombre ? {"border": "3px solid #71475E"} : {}}>{equipo.nombre}</button>;
                })}
            </div>
        </div>
    );
}

export default Espacios;
