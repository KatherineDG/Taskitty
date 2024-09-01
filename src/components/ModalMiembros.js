import {React, useEffect, useState} from 'react';
import './styles/ModalMiembros.css';

function ModalMiembros({listaEquipos, nombreEspacio}) {

    const [listaAdministradores, setListaAdministradores] = useState([]);
    const [listaInvitados, setListaInvitados] = useState([]);

    useEffect(() => {
        listaEquipos.map((equipo) => {
            if (equipo.nombre === nombreEspacio) {
                setListaAdministradores(equipo.miembros.administradores);
                setListaInvitados(equipo.miembros.invitados);
            }
        });
        
    }, []);


    return (
        <div className='root-modal-miembros'>
            <div>
                <p style={{"fontSize":"1.4em", "margin":0}}>Miembros</p>
                <p style={{"fontSize":"1.2em", "margin":0}}>Administradores</p>
                {listaAdministradores.map((administrador) => {
                    return(
                        <div className='miembro'>
                            <img src='icons/gatobromista.png' height={40} width={40} style={{"margin":"0 20px 0 0"}} alt='iconoperfil'></img>
                            {administrador.nombre}
                        </div>
                    )
                })}
                <p style={{"fontSize":"1.2em", "margin":0}}>Invitados</p>
                {listaInvitados.map((invitado) => {
                    return(
                        <div className='miembro'>
                            <img src='icons/gatobromista.png' height={40} width={40} style={{"margin":"0 20px 0 0"}} alt='iconoperfil'></img>
                            {invitado.nombre}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ModalMiembros;