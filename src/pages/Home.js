import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";
import Navegacion from "../components/Navegacion";
import Espacios from "../components/Espacios";
import Tableros from "../components/Tableros";

import getUsuario from "../api/getUsuario.api";

function Home() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({});
  const [nombreEspacio, setNombreEspacio] = useState(
    `Espacio de ${usuario.nombre}`
  );
  const [listaEquipos, setListaEquipos] = useState([]);
  const [listaTableros, setListaTableros] = useState([]);

  const handleNombreEspacio = (nombreEspacio) => {
    console.log("Nombre de espacio:", nombreEspacio);
    setNombreEspacio(nombreEspacio);
    if (nombreEspacio !== `Espacio de ${usuario.nombre}`) {
      const listaTablerosEquipo = usuario.equipos.map((equipo) => {
        return equipo.tableros;
      });
      setListaTableros(listaTablerosEquipo);
    } else {
      setListaTableros(usuario.espacio);
    }
  };

  useEffect(() => {
    const fetchUsuario = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get("userId");

      if (userId) {
        localStorage.setItem("userId", userId);
        console.log("ID de usuario guardado:", userId);

        try {
          const user = await getUsuario(userId);
          setUsuario(user);
          setNombreEspacio(`Espacio de ${user.nombre}`);
          setListaTableros(user.espacio);
          setListaEquipos(user.equipos);

          // Convertir el objeto a una cadena JSON
          const usuarioJSON = JSON.stringify(user);

          // Guardar la cadena JSON en localStorage
          localStorage.setItem("usuario", usuarioJSON);
        } catch (error) {
          console.error("Error al obtener el usuario:", error);
          navigate("/error");
        }
      } else {
        // Maneja el caso en que no se encuentra el ID del usuario
        navigate("/error");
      }
    };

    fetchUsuario();
  }, [navigate]);

  //    const userId = localStorage.getItem('userId');

  return (
    <div>
      <Navegacion />
      <div className="home">
        <Espacios
          nombreUsuario={usuario.nombre}
          listaEquipos={listaEquipos}
          handleNombreEspacio={handleNombreEspacio}
        />
        <Tableros
          listaTablerosPersonal={listaTableros}
          nombreEspacio={nombreEspacio}
          nombreUsuario={usuario.nombre}
        />
      </div>
    </div>
  );
}

export default Home;
