import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles/Tablero.css';
import Navegacion from '../components/Navegacion';
import Tarea from '../components/Tarea';
import ModalAltaTarea from '../components/ModalAltaTarea';
import ModalTarea from '../components/ModalTarea';

function Tablero() {
  const navigate = useNavigate();

  const [hacerTareas, setHacerTareas] = useState([
    { id: '1', tituloTarea: 'Tarea1', dificultad: 'facil', descripcion: 'Descripcion 1', listaMiembrosCargo: ['m1', 'm2', 'm3'], listaMiembrosConectados: ['m1', 'm2'] },
    { id: '2', tituloTarea: 'Tarea2', dificultad: 'media', descripcion: 'Descripcion 2', listaMiembrosCargo: ['m1', 'm2', 'm3'], listaMiembrosConectados: ['m1', 'm2'] },
    { id: '3', tituloTarea: 'Tarea3', dificultad: 'dificil', descripcion: 'Descripcion 3', listaMiembrosCargo: ['m1', 'm2'], listaMiembrosConectados: ['m1', 'm2'] },
  ]);

  const [enProcesoTareas, setEnProcesoTareas] = useState([]);
  const [terminadoTareas, setTerminadoTareas] = useState([]);
  const [mostrarModalAltaTarea, setMostrarModalAltaTarea] = useState(false);
  const [verTarea, setVerTarea] = useState(false);

  const irAtras = () => {
    navigate('/home-espacios');
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const getList = (id) => {
      if (id === 'todo') return hacerTareas;
      if (id === 'inProcess') return enProcesoTareas;
      if (id === 'done') return terminadoTareas;
    };

    const setList = (id, tasks) => {
      if (id === 'todo') setHacerTareas(tasks);
      if (id === 'inProcess') setEnProcesoTareas(tasks);
      if (id === 'done') setTerminadoTareas(tasks);
    };

    const sourceTasks = getList(source.droppableId);
    const destTasks = getList(destination.droppableId);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    destTasks.splice(destination.index, 0, movedTask);

    setList(source.droppableId, [...sourceTasks]);
    setList(destination.droppableId, [...destTasks]);
  };

  const handleMostrarModalAltaTarea = () => {
    setMostrarModalAltaTarea(!mostrarModalAltaTarea);
  };

  const handleCerrarModalAltaTarea = () => {
    setMostrarModalAltaTarea(false);
  };

  const handleVerTarea = () => {
    setVerTarea(true);
  };

  const handleCerrarVerTarea = () => {
    setVerTarea(false);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {mostrarModalAltaTarea ? <ModalAltaTarea handleCerrarModalAltaTarea={handleCerrarModalAltaTarea} /> : null}
      {verTarea ? <ModalTarea handleCerrarVerTarea={handleCerrarVerTarea} /> : null}
      <Navegacion />
      <div className='tablero'>
        <div className='contenedor-titulo-tablero'>
          <img src='icons/iconback.png' onClick={irAtras} alt='volver' style={{ cursor: 'pointer' }} height={35} width={35} />
          <p style={{ fontFamily: 'Niramit-Bold', fontSize: 25, marginLeft: 20 }}>Tablero1 - Espacio1</p>
        </div>
        <div className='contenedor-cajas-tareas'>
          <div className='caja-tareas'>
            <p className='titulo-caja-tareas'>Hacer</p>
            <Droppable droppableId="todo">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='contenedor-tareas'>
                  {hacerTareas.map((tarea, index) => (
                    <Draggable key={tarea.id} draggableId={tarea.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Tarea tituloTarea={tarea.tituloTarea} listaMiembrosCargo={tarea.listaMiembrosCargo} dificultad={tarea.dificultad} handleVerTarea={handleVerTarea} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <button className='btn-crear-tarea' onClick={handleMostrarModalAltaTarea}>+</button>
          </div>

          <div className='caja-tareas'>
            <p className='titulo-caja-tareas'>En Proceso</p>
            <Droppable droppableId="inProcess">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='contenedor-tareas'>
                  {enProcesoTareas.map((tarea, index) => (
                    <Draggable key={tarea.id} draggableId={tarea.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Tarea tituloTarea={tarea.tituloTarea} listaMiembrosCargo={tarea.listaMiembrosCargo} dificultad={tarea.dificultad} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className='caja-tareas'>
            <p className='titulo-caja-tareas'>Terminado</p>
            <Droppable droppableId="done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='contenedor-tareas'>
                  {terminadoTareas.map((tarea, index) => (
                    <Draggable key={tarea.id} draggableId={tarea.id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Tarea tituloTarea={tarea.tituloTarea} listaMiembrosCargo={tarea.listaMiembrosCargo} dificultad={tarea.dificultad} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Tablero;
