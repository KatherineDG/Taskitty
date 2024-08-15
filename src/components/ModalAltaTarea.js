import {React, useState} from 'react';
import './styles/ModalAltaTarea.css';

function ModalAltaTarea({handleCerrarModalAltaTarea}) {

    const [nombreTarea, setNombreTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [miembros, setMiembros] = useState([]);
    const [miembro, setMiembro] = useState('');

    const handleNombreTarea = (e) => {
        setNombreTarea(e.target.value);
    };

    const handleDescripcionTarea = (e) => {
        setDescripcionTarea(e.target.value);
    }

    const handleDificultad = (valorDificultad) => {
        console.log(valorDificultad);
        setDificultad(valorDificultad);
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


    return (
        <div className='root-modal-alta-tarea'>
            <div className='modal-alta-tarea'>
                <p style={{"fontFamily":"Kodchasan-Bold", "fontSize":25, "margin": "30px 0 5px 0"}}>Nueva tarea</p>
                <form className='form-alta-tarea'>
                    <label>Nombre de la tarea</label>
                    <input type='text' id='nombreTarea' name='nombreTarea' onChange={handleNombreTarea} required />
                    <label>Descripción</label>
                    <textarea id='descripcion' name='descripcion' onChange={handleDescripcionTarea} />
                    <label>Dificultad</label>
                    <div className='seleccion-dificultad'>
                        <div style={ dificultad === 'facil' ? {"backgroundColor":"#C1F0A8", "border":"2px solid #CB76A5"} : {"backgroundColor":"#C1F0A8"}} onClick={()=>handleDificultad('facil')}></div>
                        <div style={ dificultad === 'media' ? {"backgroundColor":"#FFDB8C", "border":"2px solid #CB76A5"} : {"backgroundColor":"#FFDB8C"}} onClick={()=>handleDificultad('media')}></div>
                        <div style={ dificultad === 'dificil' ? {"backgroundColor":"#CD5C08", "border":"2px solid #CB76A5"} : {"backgroundColor":"#CD5C08"}} onClick={()=>handleDificultad('dificil')}></div>
                    </div>
                    <label>Miembros a cargo</label>
                    <div>
                        <input type='text' id='miembros' name='miembros' placeholder='buscar usuario por su ID' onChange={handleMiembro}></input>
                        <button className='btn-buscar-miembro' onClick={handleMiembros}>Buscar</button>
                    </div>
                    <div className='contenedor-miembros-a-invitar'>
                        {miembros.map((miembro) => {
                            return (
                                <p>{miembro} <button className='btn-eliminar-miembro' onClick={()=>eliminarMiembroAInvitar(miembro)}>x</button></p>
                            );
                        })}
                    </div>
                    <div className='contenedor-btn-alta-tarea'>
                        <button className='btn-alta-tarea'>Crear</button>
                        <button className='btn-cancelar-alta-tarea' onClick={handleCerrarModalAltaTarea}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalAltaTarea;