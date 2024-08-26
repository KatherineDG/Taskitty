import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/ModalPerfil.css';

function ModalPerfil({cerrarModalPerfil}) {
    const navigate = useNavigate();

    const irPerfil = () => {
        navigate('/perfil');
    }

    const salir = () => {
        localStorage.clear();
        navigate('/');
    }


    return(
        <div className='root-modal-perfil'>
            <div onMouseLeave={cerrarModalPerfil} className='modal-perfil'>
                <p onClick={irPerfil}>Ver perfil</p>
                <p onClick={salir}>Salir</p>
            </div>
        </div>
    )
}

export default ModalPerfil;