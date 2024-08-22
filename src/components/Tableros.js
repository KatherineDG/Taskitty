import { React, useState, useEffect } from "react";
import "./styles/Tableros.css";
import ModalMiembros from "./ModalMiembros";

function Tableros({ listaTablerosPersonal, nombreEspacio, nombreUsuario }) {

  const [MostrarModalMiembros, setMostrarModalMiembros] = useState(false);


  const handleMostrarModalMiembros = () => {
    setMostrarModalMiembros(true);
  }

  const handleNoMostrarModalMiembros = () => {
    setMostrarModalMiembros(false);
  }
  const listaTableross = ["Tablero Personal 1", "Tablero Personal 2", "Tablero Personal 3"];

  return (
    <div>
      { MostrarModalMiembros ? <ModalMiembros /> : '' }
      <p className="titulo-tableros">Tablero de tareas - {nombreEspacio}
        {nombreEspacio !== `Espacio de ${nombreUsuario}` && nombreEspacio !== '' ?
          <img src="icons/iconequipo.png" onMouseEnter={handleMostrarModalMiembros} onMouseOut={handleNoMostrarModalMiembros} height={50} width={50} style={{"margin":"0 0 0 10px"}} alt='iconoequipos'></img>
        :
        ''}
      </p>
      <div className="contenedor-tableros">
        {listaTablerosPersonal.map((tableroPersonal, index) => {
          console.log('Tablero:', tableroPersonal); // Verifica que el objeto tiene la propiedad nombre
          return (
            <div key={index} className="tablero-tareas">
              <p className="titulo-tablero">{tableroPersonal.nombre}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tableros;
