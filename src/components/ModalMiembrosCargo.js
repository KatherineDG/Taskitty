import {React} from 'react';
import './styles/ModalMiembrosCargo.css';

function ModalMiembrosCargo({miembros, estado}) {
    return (
        <div className='root-modal-miembros-cargo'>
            <div className={estado === 'terminado' ? 'modal-miembros-cargo-izquierda' : 'modal-miembros-cargo-derecha' } >
                <p>Miembros a cargo</p>
                {miembros.map((miembro)=>(
                    <div className='contenedor-miembro-cargo'>
                        <p className='miembro-cargo'>{miembro}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ModalMiembrosCargo;