import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles/Registro.css';
import './styles/RootStyle.css';
import registroUsuario from '../api/registroUsuario.api';

function Registro() {

    const navigte = useNavigate()

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

    const crearCuenta = async (event) => {
        event.preventDefault();
        console.log(nombreUsuario, contrasena, correoElectronico, iconoSeleccionado)
        try{
            console.log('Creando cuenta...')
            const response = await registroUsuario(nombreUsuario, contrasena, correoElectronico, iconoSeleccionado)
            console.log(response)
            if (response === 201){
                alert('Cuenta creada con éxito')
                navigte('/')
            }
        } catch (error) {
            console.error('Error al crear cuenta:', error)
        }
    }

    const listaIconosGatos = ['gatobromista.png', 'gatohamburguesa.png', 'gatopensativo.png', 'gatotriste.png']

    return (
        <div className='root-registro'>
            <div className='registro'>
                <h1>TASKITTY</h1>
                <form className='form-registro' onSubmit={crearCuenta}>
                    <p style={{'fontFamily':'Niramit-Medium'}}>Elegí tu icono</p>
                    <div>
                        <div>
                            {listaIconosGatos.map((icono) => {
                                return (
                                    <img src={`icons/${icono}`} className='icono-gato' id={icono} onClick={() => handleIconoSeleccionado(icono)} alt='icono-gato' ></img>
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
                    <button type='submit'>Crear cuenta</button>
                </form>
            </div>
        </div>
    );
}

export default Registro;