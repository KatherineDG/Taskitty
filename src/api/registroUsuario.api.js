const registroUsuario = async (nombre, contrasena, email, foto) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
        'nombre': nombre,
        'email': email,
        'contrasena': contrasena,
        'foto': foto
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors'
    };

    const response = await fetch('http://localhost:5000/api/usuarios/postUsuario', requestOptions)
    return response.status

}

export default registroUsuario;