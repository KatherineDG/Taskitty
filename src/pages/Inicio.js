import {React} from 'react';
import './styles/Inicio.css';
import './styles/RootStyle.css';

function Inicio() {

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
                        <form className='form-inicio'>
                            <label style={{'fontFamily':'Niramit-Medium'}}>Nombre de usuario</label>
                            <input type='text' style={{'fontFamily':'Niramit-Medium'}} />
                            <label style={{'fontFamily':'Niramit-Medium'}}>Contraseña</label>
                            <input type='password' style={{'fontFamily':'Niramit-Medium'}} />
                            <button style={{'fontFamily':'Niramit-Bold'}}>Entrar</button>
                        </form>
                        <p>o</p>
                        <button id='iniciogoogle' style={{'fontFamily':'Niramit-Bold'}}><img src='icons/googleicon.png' alt='googleicon'></img>Iniciar con Google</button>
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