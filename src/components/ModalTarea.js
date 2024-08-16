import {React, useState} from 'react';
import './styles/ModalTarea.css';

function ModalTarea({handleCerrarVerTarea}) {

    const nombreTareaCompleto = 'Tarea1';
    const descripcionTareaCompleto = 'Descripcion de la tarea';
    const dificultadTareaCompleto = 'facil';
    const miembrosTareaCompleto = ['m1', 'm2'];

    const [nombreTarea, setNombreTarea] = useState(nombreTareaCompleto);
    const [descripcionTarea, setDescripcionTarea] = useState(descripcionTareaCompleto);
    const [dificultad, setDificultad] = useState(dificultadTareaCompleto);
    const [miembros, setMiembros] = useState(miembrosTareaCompleto);
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
                <p style={{"fontFamily":"Kodchasan-Bold", "fontSize":25, "margin": "30px 0 5px 0"}}>Tarea</p>
                <form className='form-alta-tarea' onSubmit={false}>
                    <label>Nombre de la tarea</label>
                    <input type='text' id='nombreTarea' name='nombreTarea' value={nombreTarea} onChange={handleNombreTarea} required />
                    <label>Descripción</label>
                    <textarea id='descripcion' name='descripcion' value={descripcionTarea} onChange={handleDescripcionTarea} />
                    <label>Dificultad</label>
                    <div className='seleccion-dificultad'>
                        <div style={ dificultad === 'facil' ? {"backgroundColor":"#C1F0A8", "border":"2px solid #CB76A5"} : {"backgroundColor":"#C1F0A8"}} onClick={()=>handleDificultad('facil')}></div>
                        <div style={ dificultad === 'media' ? {"backgroundColor":"#FFDB8C", "border":"2px solid #CB76A5"} : {"backgroundColor":"#FFDB8C"}} onClick={()=>handleDificultad('media')}></div>
                        <div style={ dificultad === 'dificil' ? {"backgroundColor":"#CD5C08", "border":"2px solid #CB76A5"} : {"backgroundColor":"#CD5C08"}} onClick={()=>handleDificultad('dificil')}></div>
                    </div>
                    <label>Miembros a cargo</label>
                    <div>
                        <input type='text' id='miembros' name='miembros' placeholder='buscar usuario por su ID' onChange={handleMiembro}></input>
                        <button type='button' className='btn-buscar-miembro' onClick={handleMiembros}>Buscar</button>
                    </div>
                    <div className='contenedor-miembros-a-invitar'>
                        {miembros.map((miembro) => {
                            return (
                                <p>{miembro} <button type='button' className='btn-eliminar-miembro' onClick={()=>eliminarMiembroAInvitar(miembro)}>x</button></p>
                            );
                        })}
                    </div>
                    <div className='contenedor-btn-alta-tarea'>
                        <button type='button' className='btn-alta-tarea'>Guardar</button>
                        <button type='button' className='btn-cancelar-alta-tarea' onClick={handleCerrarVerTarea}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalTarea;