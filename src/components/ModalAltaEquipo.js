import {React, useState} from 'react';
import './styles/ModalAltaEquipo.css';

function ModalAltaEquipo({cerrarModalAltaEquipo, altaEquipoAPI}) {
    const [nombreEquipo, setNombreEquipo] = useState('');
    const [miembros, setMiembros] = useState([]);
    const [miembro, setMiembro] = useState('');

    const handleNombreEquipo = (event) => {
        setNombreEquipo(event.target.value);
    }


    const handleMiembros = () => {
        setMiembros([...miembros, miembro]);
    }

    const handleMiembro = (e) => {
        setMiembro(e.target.value);
    }

    const eliminarMiembroAInvitar = (miembroAEliminar) => {
        setMiembros(miembros.filter(miembro => miembro !== miembroAEliminar));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        altaEquipoAPI(nombreEquipo, miembros);
        cerrarModalAltaEquipo();
    }

    return(
        <div className='root-modal-alta-equipo'>
            <div className='modal-alta-equipo'>
                <p style={{ "fontFamily": "Kodchasan-Bold", "fontSize": 25, "margin": "30px 0 5px 0" }}>Alta de equipo</p>
                <form className='form-alta-equipo' onSubmit={handleSubmit}>
                    <label>Nombre del equipo</label>
                    <input type='text' onChange={handleNombreEquipo}></input>
                    <label>Miembros a invitar</label>
                    <div>
                        <input type='text' id='miembros' name='miembros' placeholder='buscar usuario por su ID' onChange={handleMiembro}></input>
                        <button className='btn-buscar-miembro' onClick={handleMiembros} type='button'>Buscar</button>
                    </div>
                    <div className='contenedor-miembros-a-invitar'>
                        {miembros.map((miembro) => {
                            return (
                                <p>{miembro} <button type='button' className='btn-eliminar-miembro' onClick={()=>eliminarMiembroAInvitar(miembro)}>x</button></p>
                            );
                        })}
                    </div>
                    <div className='contenedor-btn-alta-equipo'>
                        <button type="submit" className='btn-alta-equipo'>Crear</button>
                        <button type="button" className='btn-cancelar-alta-equipo' onClick={cerrarModalAltaEquipo}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAltaEquipo;