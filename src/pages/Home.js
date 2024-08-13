import {React} from 'react';
import './styles/Home.css';
import Navegacion from '../components/Navegacion';


function Home() {

    const nombreUsuario = "Katt";
    const listaEquipos = ["Equipo 1", "Equipo 2", "Equipo 3"];
    const listaTablerosPersonal = ["Tablero Personal 1", "Tablero Personal 2", "Tablero Personal 3"];


    return (
        <div>
            <Navegacion />
            <div className='home'>
                <div className='contenedor-espacios'>
                    <p className='titulo-espacio'>Mi Espacio</p>
                    <div>
                        <button className='espacio' style={{"border": "3px solid #71475E"}}>Espacio de {nombreUsuario}</button>
                    </div>
                    <hr></hr>
                    <p className='titulo-espacio'>Equipos</p>
                    <div className='listado-equipos'>
                        {listaEquipos.map((equipo => {
                            return <button className='espacio'>{equipo}</button>
                        }))}
                    </div>
                </div>
                <div>
                    <p className='titulo-tableros'>Tablero de tareas - </p>
                    <div className='contenedor-tableros-personal'>
                        {listaTablerosPersonal.map(tableropersonal => {
                            return (
                                <div className='tablero-tareas-personal'>
                                    <p className='titulo-tablero-personal'>{tableropersonal}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;