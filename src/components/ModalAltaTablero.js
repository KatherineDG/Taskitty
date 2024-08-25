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
        <div className='root-modal-alta-tablero'>
            <div className='modal-alta-tablero'>
                <p style={{ "fontFamily": "Kodchasan-Bold", "fontSize": 25, "margin": "30px 0 5px 0" }}>Nuevo tablero</p>
                <form className='form-alta-tablero' onSubmit={handleSubmit}>
                    <label>Nombre del tablero</label>
                    <input type='text' id='nombreTablero' name='nombreTablero' onChange={handleNombreTablero} required />
                    <div className='contenedor-btn-alta-tablero'>
                        <button type="submit" className='btn-alta-tablero'>Crear</button>
                        <button type="button" className='btn-cancelar-alta-tablero' onClick={handleCerrarModalAltaTablero}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAltaTablero;
