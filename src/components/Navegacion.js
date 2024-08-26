import {React, useState} from 'react';
import './styles/Navegacion.css';
import ModalPerfil from './ModalPerfil';

function Navegacion() {

    const [mostrarModalPerfil, setMostrarModalPerfil] = useState(false);

    const abrirModalPerfil = () => {
        setMostrarModalPerfil(true);
    }

    const cerrarModalPerfil = () => {
        setMostrarModalPerfil(false);
    }
    
    return (
        <div className='root-navegacion'>
            <div className='navegacion'>
                <div className='nav-titulo'>
                    <h1>TASKITTY</h1>
                    <img className='icon-marca' src='icons/icontaskitty.png'></img>
                </div>
                <img src='icons/gatobromista.png' height={60} width={60} onMouseEnter={abrirModalPerfil}></img>
                {mostrarModalPerfil ? <ModalPerfil cerrarModalPerfil={cerrarModalPerfil} /> : null}
            </div>
        </div>
    );
}

export default Navegacion;