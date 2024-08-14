import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Tablero.css';
import Navegacion from '../components/Navegacion';

function Tablero() {

    const navigate = useNavigate();

    const nombreTablero = 'Tablero1';
    const nombreEspacio = 'Espacio1';

    const irAtras = () => {
        navigate('/home-espacios')
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
