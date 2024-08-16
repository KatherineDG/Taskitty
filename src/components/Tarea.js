import {React, useState} from 'react';
import './styles/Tarea.css';

function Tarea({tituloTarea, listaMiembrosCargo, dificultad, handleVerTarea}) {


    return (
        <div className='root-tarea' onClick={handleVerTarea}>
            <div className='tarea'>
                <p className='titulo-tarea'>{tituloTarea}</p>
                <div className='extra-tarea'>
                    <p className='extra-tarea-conectados'>{listaMiembrosCargo.length}</p>
                    <div className={dificultad}></div>
                </div>
            </div>
        </div>
    )
}

export default Tarea;