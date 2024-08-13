import {React} from 'react';
import './styles/ModalMiembros.css';

function ModalMiembros() {

    const linstaAdministradores = ['Admin1'];
    const linstaModeradores = ['Mod1', 'Mod2'];
    const linstaInvitados = ['Inv1', 'Inv2'];

    return (
        <div className='root-modal-miembros'>
            <div>
                <p style={{"fontSize":"1.4em", "margin":0}}>Miembros</p>
                <p style={{"fontSize":"1.2em", "margin":0}}>Administradores</p>
                {linstaAdministradores.map((administrador) => {
                    return(
                        <div className='miembro'>
                            <img src='icons/gatobromista.png' height={40} width={40} style={{"margin":"0 20px 0 0"}} alt='iconoperfil'></img>
                            {administrador}
                        </div>
                    )
                })}
                <p style={{"fontSize":"1.2em", "margin":0}}>Moderadores</p>
                {linstaModeradores.map((moderador) => {
                    return(
                        <div className='miembro'>
                            <img src='icons/gatobromista.png' height={40} width={40} style={{"margin":"0 20px 0 0"}} alt='iconoperfil'></img>
                            {moderador}
                        </div>
                    )
                })}
                <p style={{"fontSize":"1.2em", "margin":0}}>Invitados</p>
                {linstaInvitados.map((invitado) => {
                    return(
                        <div className='miembro'>
                            <img src='icons/gatobromista.png' height={40} width={40} style={{"margin":"0 20px 0 0"}} alt='iconoperfil'></img>
                            {invitado}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ModalMiembros;