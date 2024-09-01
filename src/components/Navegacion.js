import {React, useState, useEffect} from 'react';
import './styles/Navegacion.css';
import ModalPerfil from './ModalPerfil';
import Invitaciones from './Invitaciones';
import getInvitaciones from '../api/getInvitaciones';

function Navegacion({listaInvitaciones, hayInvitaciones}) {

    const [mostrarModalPerfil, setMostrarModalPerfil] = useState(false);
    const [mostrarInvitaciones, setMostrarInvitaciones] = useState();

    const abrirModalPerfil = () => {
        setMostrarModalPerfil(true);
    }

    const cerrarModalPerfil = () => {
        setMostrarModalPerfil(false);
    }

    const abrirInvitaciones = () => {
        setMostrarInvitaciones(true);
    }

    const cerrarInvitaciones = () => {
        setMostrarInvitaciones(false);
    } 
    
    return (
        <div className='root-navegacion'>
            <div className='navegacion'>
                <div className='nav-titulo'>
                    <h1>TASKITTY</h1>
                    <img className='icon-marca' src='icons/icontaskitty.png'></img>
                </div>
                <div className='iconos'>
                    <img className='icon-notificacion' src='icons/campanaicon.png' onClick={abrirInvitaciones} width={30} height={30} style={{"cursor":"pointer", "margin":"0 30px 15px 0"}}></img>
                    {hayInvitaciones ? <div className='notificacion'></div> : null}
                    <img src='icons/gatobromista.png' height={60} width={60} onMouseEnter={abrirModalPerfil}></img>
                </div>  
                {mostrarModalPerfil ? <ModalPerfil cerrarModalPerfil={cerrarModalPerfil} /> : null}
            </div>
            {mostrarInvitaciones ? <Invitaciones cerrarInvitaciones={cerrarInvitaciones} hayInvitaciones={hayInvitaciones} listaInvitaciones={listaInvitaciones}/> : null}
        </div>
    );
}

export default Navegacion;