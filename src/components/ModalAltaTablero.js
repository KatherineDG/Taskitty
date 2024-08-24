import { React, useState } from 'react';
import './styles/ModalAltaTablero.css';

function ModalAltaTablero({ handleCerrarModalAltaTablero, altaTableroAPI }) {
    const [nombreTablero, setNombreTablero] = useState('');

    const handleNombreTablero = (event) => {
        setNombreTablero(event.target.value);
    }

    const handleSubmit = (event) => {
        altaTableroAPI(nombreTablero);
        handleCerrarModalAltaTablero();
    }

    return (
        <div className='root-modal-alta-tarea'>
            <div className='modal-alta-tarea'>
                <p style={{ "fontFamily": "Kodchasan-Bold", "fontSize": 25, "margin": "30px 0 5px 0" }}>Nuevo tablero</p>
                <form className='form-alta-tarea' onSubmit={handleSubmit}>
                    <label>Nombre del tablero</label>
                    <input type='text' id='nombreTablero' name='nombreTablero' onChange={handleNombreTablero} required />
                    <div className='contenedor-btn-alta-tarea'>
                        <button type="submit" className='btn-alta-tarea'>Crear</button>
                        <button type="button" className='btn-cancelar-alta-tarea' onClick={handleCerrarModalAltaTablero}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAltaTablero;
