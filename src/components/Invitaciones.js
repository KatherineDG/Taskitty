import {React} from 'react';
import './styles/Invitaciones.css';


function Invitaciones({cerrarInvitaciones, hayInvitaciones}) {

    const listaInvitaciones = ["Invitación 1", "Invitación 2", "Invitación 3"];
    const nombreUsuarioEmisor = "usuario";
    const nombreEquipo = "equipo";
    return (
        <div className='root-invitaciones'>
            <div className='invitaciones'>
                {hayInvitaciones ? 
                <div>
                    {listaInvitaciones.map((invitacion) => (
                        <div className='invitacion'>
                            <div className='invitacion-info'>
                                <p><b>{nombreUsuarioEmisor}</b> te invita a su equipo: <b>{nombreEquipo}</b></p>
                            </div>
                            <div className='botones'>
                                <img src='icons/aceptaricon.png'></img>
                                <img src='icons/noaceptaricon.png'></img>
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