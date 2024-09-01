import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUsuario from '../api/getUsuario.api';


const useUsuario = () => {
    const [usuario, setUsuario] = useState({});
    const [nombreEspacio, setNombreEspacio] = useState('');
    const [listaTableros, setListaTableros] = useState([]);
    const [listaEquipos, setListaEquipos] = useState([]);
    const [listaInvitaciones, setListaInvitaciones] = useState([]);
    const [hayInvitaciones, setHayInvitaciones] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        const fetchUsuario = async (id) => {
            try {
                const user = await getUsuario(id);
                setUsuario(user);
                setNombreEspacio(`Espacio de ${user.nombre}`);
                setListaTableros(user.espacio);
                setListaEquipos(user.equipos);
                const invitaciones = user.invitaciones;
                setListaInvitaciones(invitaciones);
                setHayInvitaciones(invitaciones.length > 0);

                // Guardar la cadena JSON en localStorage
                localStorage.setItem("usuario", JSON.stringify(user));
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
                navigate('/error');  // Redirige si ocurre un error
            }
        };

        if (!userId) {
            const urlParams = new URLSearchParams(window.location.search);
            const idFromUrl = urlParams.get("userId");

            if (idFromUrl) {
                localStorage.setItem("userId", idFromUrl);
                fetchUsuario(idFromUrl);
            } else {
                navigate('/error');  // Redirige si no se encuentra el ID del usuario
            }
        } else {
            fetchUsuario(userId);
        }
    }, [navigate]);

    return {
        usuario,
        nombreEspacio,
        listaTableros,
        listaEquipos,
        listaInvitaciones,
        hayInvitaciones,
    };
};

export default useUsuario;
