import { React, useState } from "react";
import "./styles/Tableros.css";
import ModalMiembros from "./ModalMiembros";

function Tableros({ listaTableros, nombreEspacio, nombreUsuario }) {

  const [MostrarModalMiembros, setMostrarModalMiembros] = useState(false);

  const handleMostrarModalMiembros = () => {
    setMostrarModalMiembros(true);
  }

  const handleNoMostrarModalMiembros = () => {
    setMostrarModalMiembros(false);
  }

  return (
    <div>
      { MostrarModalMiembros ? <ModalMiembros/> : '' }
      <p className="titulo-tableros">Tablero de tareas - {nombreEspacio}
        {nombreEspacio !== `Espacio de ${nombreUsuario}` && nombreEspacio !== '' ?
          <img src="icons/iconequipo.png" onMouseEnter={handleMostrarModalMiembros} onMouseOut={handleNoMostrarModalMiembros} height={50} width={50} style={{"margin":"0 0 0 10px"}} alt='iconoequipos'></img>
        :
        ''}
      </p>
      <div className="contenedor-tableros">
        {listaTableros.map((tablero) => {
          return (
            <div className="tablero-tareas">
              <p className="titulo-tablero">{tablero}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tableros;
