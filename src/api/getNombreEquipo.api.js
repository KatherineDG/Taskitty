const getNombreEquipo = async (idUsuario, idEquipo) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuario": idUsuario,
        "idEquipo": idEquipo
    });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/equipos/getNombreEquipo`, requestOptions);
    return response.json();

}

export default getNombreEquipo;