const aceptarInvitacion = async (idUsuarioInvitado, idUsuarioEmisor, idEquipo, idInvitacion) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuarioInvitado": idUsuarioInvitado,
        "idUsuarioEmisor": idUsuarioEmisor,
        "idEquipo": idEquipo,
        "idInvitacion": idInvitacion
    })

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch('http://localhost:5000/api/equipos/aceptarInvitacionEquipo', requestOptions)
    let jsonData = await response.json();
    //console.log(response.status);
    return jsonData;

}

export default aceptarInvitacion;