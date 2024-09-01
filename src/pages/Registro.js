import {React, useState} from 'react';
import './styles/Registro.css';
import './styles/RootStyle.css';
import registroUsuario from '../api/registroUsuario.api';

function Registro() {

    const [iconoSeleccionado, setIconoSeleccionado] = useState('')
    const [nombreUsuario, setNombreUsuario] = useState('')
    const [correoElectronico, setCorreoElectronico] = useState('')
    const [contrasena, setContrasena] = useState('')

    const handleIconoSeleccionado = (icono) => {
        setIconoSeleccionado(icono)
        const iconoSeleccionadoDOM = document.getElementById(icono)
        iconoSeleccionadoDOM.style.border = '5px solid #CB76A5'
        iconoSeleccionadoDOM.style.objectFit = 'cover'
        iconoSeleccionadoDOM.style.borderRadius = '50%'

        if(iconoSeleccionado !== icono && iconoSeleccionado !== '') {
            const iconoSeleccionadoAnteriorDOM = document.getElementById(iconoSeleccionado)
            iconoSeleccionadoAnteriorDOM.style= 'none'
        }
    }

    const handleNombreUsuario = (event) => {
        setNombreUsuario(event.target.value)
    }

    const handleCorreoElectronico = (event) => {
        setCorreoElectronico(event.target.value)
    }

    const handleContrasena = (event) => {
        setContrasena(event.target.value)
    }

    const crearCuenta = async () => {
        try{
            const response = await registroUsuario(nombreUsuario, contrasena, correoElectronico, iconoSeleccionado)
        } catch (error) {
            console.error('Error al crear cuenta:', error)
        }
    }

    const listaIconosGatos = ['icons/gatobromista.png', 'icons/gatohamburguesa.png', 'icons/gatopensativo.png', 'icons/gatotriste.png']

    return (
        <div className='root-registro'>
            <div className='registro'>
                <h1>TASKITTY</h1>
                <form className='form-registro'>
                    <p style={{'fontFamily':'Niramit-Medium'}}>Elegí tu icono</p>
                    <div>
                        <div>
                            {listaIconosGatos.map((icono) => {
                                return (
                                    <img src={icono} className='icono-gato' id={icono} onClick={() => handleIconoSeleccionado(icono)} alt='icono-gato' ></img>
                                )
                            })}
                    </div>
                    </div>
                    <label>Nombre de usuario</label>
                    <input type='text' onChange={handleNombreUsuario} />
                    <label>Correo electrónico</label>
                    <input type='email' onChange={handleCorreoElectronico}/>
                    <label>Contraseña</label>
                    <input type='password' onChange={handleContrasena}/>
                    <button>Crear cuenta</button>
                </form>
            </div>
        </div>
    );
}

export default Registro;