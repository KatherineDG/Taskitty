const getUsuario = async (idUsuario) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/usuarios/getUsuario/${idUsuario}`, requestOptions);
    return response.json();

}

export default getUsuario;