const rechazarInvitacion = async (idUsuarioInvitado, idInvitacion) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuarioInvitado": idUsuarioInvitado,
        "idInvitacion": idInvitacion
    });

    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    };

    const response = await fetch('http://localhost:5000/api/equipos/rechazarInvitacionEquipo', requestOptions);
    let jsonData = await response.json();
    return jsonData;
}

export default rechazarInvitacion;