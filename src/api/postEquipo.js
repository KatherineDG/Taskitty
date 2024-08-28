const postEquipo = async (idUsuario, nombreEquipo, invitados) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuario": idUsuario,
        "nombreEquipo": nombreEquipo,
        "invitados": invitados
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/equipos/postEquipo`, requestOptions);
    let jsonData = await response.json();
    //console.log(response.status);
    return jsonData;

}

export default postEquipo;