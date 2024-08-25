import {React, useState, useEffect} from 'react';
import './styles/Inicio.css';
import './styles/RootStyle.css';
import { useNavigate } from 'react-router-dom';
import login from '../api/login.api';

function Inicio() {
   
    const navigate = useNavigate();
    
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleNombreUsuario = (event) => {
        setNombreUsuario(event.target.value);
        console.log(nombreUsuario)
    }

    const handleContrasena = (event) => {
        setContrasena(event.target.value);
        console.log(contrasena)
    }

    const handleEntrar = async (event) => {
        event.preventDefault()
        try {
            const response = await login(nombreUsuario, contrasena);
            console.log('Respuesta:', response);
            if (response.status === 200) {
                localStorage.setItem('userId', response.data._id);
                navigate(`/home-espacios?userId=${response.data._id}`);
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
        console.log('Entrar')
    }

    const irRegistro = () => {
        navigate('/registro');
    }

    const loginConGoogle = () => {
        window.location.href = 'http://localhost:5000/auth/google';
    }


    return (
        <div className='root-inicio'>
            <div className='inicio'>
                <div className='contenedor-titulo'>
                    <h1>TASKITTY</h1>
                    <img src='images/gatoilust.png'></img>
                </div>
                <div>
                    <div className='contenedor-iniciar-sesion'>
                        <h2 style={{'fontFamily':'Niramit-Bold'}} >¡Bienvenido a Taskitty!</h2>
                        <p style={{'fontFamily':'Niramit-SemiBold'}} >Iniciar Sesión</p>
                        <form className='form-inicio' onSubmit={handleEntrar} >
                            <label style={{'fontFamily':'Niramit-Medium'}}>Nombre de usuario</label>
                            <input onChange={handleNombreUsuario} type='text' style={{'fontFamily':'Niramit-Medium'}} />
                            <label style={{'fontFamily':'Niramit-Medium'}}>Contraseña</label>
                            <input onChange={handleContrasena} type='password' style={{'fontFamily':'Niramit-Medium'}} />
                            <button type='submit' style={{'fontFamily':'Niramit-Bold'}}>Entrar</button>
                        </form>
                        <p>o</p>
                        <button onClick={loginConGoogle} type='button' id='iniciogoogle' style={{'fontFamily':'Niramit-Bold'}}><img src='icons/googleicon.png' alt='googleicon'></img>Iniciar con Google</button>
                        <p style={{'fontFamily':'Niramit-Regular', 'marginTop': 20}}>¿No tenes cuenta? <a onClick={irRegistro} style={{'fontFamily':'Niramit-Bold', 'cursor':'pointer'}} >Registrate</a></p>
                    </div>
                </div>
            </div>
            <div className='presentacion-inicio' style={{'fontFamily':'Niramit-Regular'}}>
                <p>Taskitty es una aplicación web que te permite organizar tus tareas diarias de una forma sencilla y eficiente.<br></br>
                Con Taskitty podrás crear, editar y eliminar tareas, asignarles una fecha de vencimiento y una prioridad, y marcarlas como completadas una vez que las hayas terminado.<br></br>
                ¡Esperamos que disfrutes de tu experiencia con Taskitty!</p>
            </div>
        </div>
        
    );
}

export default Inicio;