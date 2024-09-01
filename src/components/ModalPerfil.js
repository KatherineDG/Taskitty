import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/ModalPerfil.css';

function ModalPerfil({cerrarModalPerfil}) {
    const navigate = useNavigate();

    const [idCopiado, setIdCopiado] = useState(false);

    const irPerfil = () => {
        navigate('/perfil');
    }

    const copiarID = () => {
        const idUsuario = localStorage.getItem('userId');
        navigator.clipboard.writeText(idUsuario);
        setIdCopiado(true);
    }

    const salir = () => {
        localStorage.clear();
        navigate('/');
    }


    return(
        <div className='root-modal-perfil'>
            <div onMouseLeave={cerrarModalPerfil} className='modal-perfil'>
                <p onClick={irPerfil}>Ver perfil</p>
                {idCopiado ? <p>copiado^^</p> : <p onClick={copiarID}>Copiar ID</p>}
                <p onClick={salir}>Salir</p>
            </div>
        </div>
    )
}

export default ModalPerfil;