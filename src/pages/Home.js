import {React, useState} from 'react';
import './styles/Home.css';
import Navegacion from '../components/Navegacion';
import Espacios from '../components/Espacios';
import Tableros from '../components/Tableros';


function Home() {

    const nombreUsuario = "Katt";

    const [nombreEspacio, setNombreEspacio] = useState(`Espacio de ${nombreUsuario}`);

    const handleNombreEspacio = (nombreEspacio) => {
        setNombreEspacio(nombreEspacio);
    }


    const listaEquipos = ["Equipo 1", "Equipo 2", "Equipo 3"];
    const listaTableros = ["Tablero Personal 1", "Tablero Personal 2", "Tablero Personal 3"];

    return (
        <div>
            <Navegacion />
            <div className='home'>
                <Espacios nombreUsuario={nombreUsuario} listaEquipos={listaEquipos}  handleNombreEspacio={handleNombreEspacio} />
                <Tableros listaTableros={listaTableros} nombreEspacio={nombreEspacio} nombreUsuario={nombreUsuario}/>
            </div>
        </div>
    );
}

export default Home;