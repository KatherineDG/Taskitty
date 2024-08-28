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
                <div className='iconos'>
                    <img className='icon-notificacion' src='icons/campanaicon.png' width={30} height={30} style={{"cursor":"pointer", "margin":"0 30px 15px 0"}}></img>
                    <div className='notificacion'></div>
                    <img src='icons/gatobromista.png' height={60} width={60} onMouseEnter={abrirModalPerfil}></img>
                </div>  
                {mostrarModalPerfil ? <ModalPerfil cerrarModalPerfil={cerrarModalPerfil} /> : null}
            </div>
        </div>
    );
}

export default Navegacion;