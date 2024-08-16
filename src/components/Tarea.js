import {React, useState} from 'react';
import './styles/Tarea.css';
import ModalMiembrosCargo from './ModalMiembrosCargo';

function Tarea({tituloTarea, listaMiembrosCargo, dificultad, handleVerTarea, estado}) {

    const [mostrarMiembrosCargo, setMostrarMiembrosCargo] = useState(false);

    const handleMostrarMiembrosCargo = () => {
        setMostrarMiembrosCargo(true);
      }
    
      const handleCerrarMiembrosCargo = () => {
        setMostrarMiembrosCargo(false);
      }


    return (
        <div className='root-tarea' onClick={handleVerTarea}>
            <div className='tarea'>
                <p className='titulo-tarea'>{tituloTarea}</p>
                <div className='extra-tarea' onMouseEnter={handleMostrarMiembrosCargo} onMouseLeave={handleCerrarMiembrosCargo}>
                    {mostrarMiembrosCargo ? <ModalMiembrosCargo miembros={listaMiembrosCargo} estado={estado}/> : null}
                    <p className='extra-tarea-conectados'>{listaMiembrosCargo.length}</p>
                    <div className={dificultad}></div>
                </div>
            </div>
        </div>
    )
}

export default Tarea;