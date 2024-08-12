import {React} from 'react';
import './styles/Navegacion.css';

function Navegacion() {
    return (
        <div className='root-navegacion'>
            <div className='navegacion'>
                <div className='nav-titulo'>
                    <h1>TASKITTY</h1>
                    <img className='icon-marca' src='icons/icontaskitty.png'></img>
                </div>
                <img src='icons/gatobromista.png' height={60} width={60}></img>
            </div>
        </div>
    );
}

export default Navegacion;