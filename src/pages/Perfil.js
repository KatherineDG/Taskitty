import {React} from 'react';
import './styles/Perfil.css';
import Navegacion from '../components/Navegacion';
import useUsuario from '../hooks/useUsuario';

function Perfil(){

    const {
        usuario,
        listaInvitaciones,
        hayInvitaciones
    } = useUsuario();

    const irAtras = () => {
        window.history.back();
    }

    return(
        <div>
            <Navegacion listaInvitaciones={listaInvitaciones} hayInvitaciones={hayInvitaciones} fotoPerfil={usuario.foto}/>
            <img  onClick={irAtras} src='icons/iconback.png' height={50} style={{"cursor":"pointer", "margin":"20px 0 0 0"}}></img>
            <div className='perfil'>
                <div>
                    <img src={`icons/${usuario.foto}`} height={200} width={200}></img>
                </div>
                <div>
                    <h1>{usuario.nombre}</h1>
                    <h2>{usuario.email}</h2>
                    <h2 style={{"color":"gray"}}>{usuario._id}</h2>
                </div>
            </div>
        </div>
    )
}

export default Perfil;