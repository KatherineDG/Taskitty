import {React} from 'react';
import './styles/Invitaciones.css';
import aceptarInvitacion from '../api/aceptarInvitacion';
import rechazarInvitacion from '../api/rechazarInvitacion';


function Invitaciones({cerrarInvitaciones, hayInvitaciones, listaInvitaciones}) {

    const aceptarInvitacionAPI = async (idUsuarioEmisor, idEquipo, idInvitacion) => {

        const idUsuarioInvitado = localStorage.getItem('userId');
        console.log(idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion)
        try {
            const response = await aceptarInvitacion(idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion);
            console.log('Respuesta:', response);
            if (response.message === "Invitacion aceptada") {
                console.log('Invitacion aceptada');
                cerrarInvitaciones()
                //window.location.reload();
            } else {
                console.log('No se pudo aceptar la invitacion');
            }
        } catch (error) {
            console.log('No se pudo aceptar la invitacion');
        }
    }

    const rechazarInvitacionAPI = async (idInvitacion) => {
        const idUsuarioInvitado = localStorage.getItem('userId');
        console.log(idUsuarioInvitado, idInvitacion)
        try {
            const response = await rechazarInvitacion(idUsuarioInvitado, idInvitacion);
            console.log('Respuesta:', response);
        } catch {
            console.log('No se pudo rechazar la invitacion');
        }
    }

    return (
        <div className='root-invitaciones'>
            <div className='invitaciones'>
                {hayInvitaciones ? 
                <div>
                    {listaInvitaciones.map((invitacion) => (
                        <div className='invitacion'>
                            <div className='invitacion-info'>
                                <p><b>{invitacion.nombreEmisor}</b> te invita a su equipo: <b>{invitacion.nombreEquipo}</b></p>
                            </div>
                            <div className='botones'>
                                <img onClick={() => aceptarInvitacionAPI(invitacion.emisor, invitacion.equipo, invitacion._id)} src='icons/aceptaricon.png'></img>
                                <img onClick={() => rechazarInvitacionAPI(invitacion._id)} src='icons/noaceptaricon.png'></img>
                            </div>
                        </div>
                    ))} 
                </div>
                    : 
                    <div>
                        <p className='sin-invitaciones'>No tienes invitaciones</p>
                    </div>}
                
                    <button type='button' className='btn-cerrar-invitaciones' onClick={cerrarInvitaciones}>cerrar</button>
            </div>
        </div>
    );
}

export default Invitaciones;