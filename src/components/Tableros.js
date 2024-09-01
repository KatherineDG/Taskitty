import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Tableros.css";
import ModalMiembros from "./ModalMiembros";

function Tableros({ listaTablerosPersonal, nombreEspacio, nombreUsuario, handleMostrarModalAltaTablero, listaEquipos }) {

  const navigate = useNavigate();
  const [MostrarModalMiembros, setMostrarModalMiembros] = useState(false);


  const handleMostrarModalMiembros = () => {
    setMostrarModalMiembros(true);
  }

  const handleNoMostrarModalMiembros = () => {
    setMostrarModalMiembros(false);
  }

  const irTablero = (nombreTablero) => {
    navigate(`/tablero/${nombreTablero}`);
  }

  return (
    <div>
      { MostrarModalMiembros ? <ModalMiembros listaEquipos={listaEquipos} nombreEspacio={nombreEspacio}/> : '' }
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
            <div onClick={()=>irTablero(tableroPersonal.nombre)} key={index} className="tablero-tareas">
              <p className="titulo-tablero">{tableroPersonal.nombre}</p>
            </div>
          );
        })}
        <button className="btn-crear-tablero" onClick={handleMostrarModalAltaTablero}>+</button>
      </div>
    </div>
  );
}

export default Tableros;
