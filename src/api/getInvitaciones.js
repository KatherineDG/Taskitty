const getInvitaciones = async (idUsuario) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idUsuario": idUsuario
    });

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/equipos/getInvitaciones`, requestOptions);
    return response.json();
}

export default getInvitaciones;