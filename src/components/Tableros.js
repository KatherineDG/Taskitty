import { React } from "react";
import "./styles/Tableros.css";

function Tableros({ listaTableros, nombreEspacio }) {
  return (
    <div>
      <p className="titulo-tableros">Tablero de tareas - {nombreEspacio}</p>
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
