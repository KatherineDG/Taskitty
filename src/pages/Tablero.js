import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Tablero.css';
import Navegacion from '../components/Navegacion';
import Tarea from '../components/Tarea';

function Tablero() {

    const navigate = useNavigate();

    const [abrirModalCrearTarea, setAbrirModalCrearTarea] = useState(false);

    const nombreTablero = 'Tablero1';
    const nombreEspacio = 'Espacio1';

    const irAtras = () => {
        navigate('/home-espacios')
    }

    const handleAbrirModalCrearTarea = () => {
        setAbrirModalCrearTarea(true);
    }


    return (
        <div>
            <Navegacion />
            <div className='tablero'>
                <div className='contenedor-titulo-tablero'>
                    <img src='icons/iconback.png' onClick={irAtras} alt='volver' style={{"cursor":"pointer"}} height={35} width={35}></img>
                    <p style={{"fontFamily":"Niramit-Bold", "fontSize":25, "margin-left":"20px"}}> {nombreTablero} - {nombreEspacio} </p>
                </div>
                <div className='contenedor-cajas-tareas'>
                    <div className='caja-tareas'>
                        <p className='titulo-caja-tareas'>Hacer</p>
                        <div className='contenedor-tareas'>
                            <Tarea tituloTarea={'Tarea1'} listaMiembrosConectados={['m1', 'm2']} dificultad={'facil'}/>
                        </div>
                        <button className='btn-crear-tarea'>+</button>
                    </div>
                    <div className='caja-tareas'>
                        <p className='titulo-caja-tareas'>En Proceso</p>
                    </div>
                    <div className='caja-tareas'>
                        <p className='titulo-caja-tareas'>Terminado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tablero;
