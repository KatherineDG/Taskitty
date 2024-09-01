const postTableroEquipo = async (idUsuario, nombreEquipo, nombreTablero) => {
    console.log('ID Usuario:', idUsuario);
    console.log('Nombre Equipo:', nombreEquipo);
    console.log('Nombre Tablero:', nombreTablero);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuario": idUsuario,
        "nombreEquipo": nombreEquipo,
        "nombreTablero": nombreTablero,
    });


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/tableros/postTableroEquipo`, requestOptions);
    let jsonData = await response.json();
    //console.log(response.status);
    return jsonData;
}

export default postTableroEquipo; 