import {React} from 'react';
import './styles/Tarea.css';

function Tarea({tituloTarea, listaMiembrosConectados, dificultad}) {
    return (
        <div className='root-tarea'>
            <div className='tarea'>
                <p className='titulo-tarea'>{tituloTarea}</p>
                <div className='extra-tarea'>
                    <p className='extra-tarea-conectados'>mc</p>
                    <div className={dificultad}></div>
                </div>
            </div>
        </div>
    )
}

export default Tarea;