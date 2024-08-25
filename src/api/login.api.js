const login = async (nombre, contrasena) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "nombre": nombre,
        "contrasena": contrasena
    });


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        mode: 'cors',
    };

    const response = await fetch(`http://localhost:5000/api/usuarios/login`, requestOptions);
    const data = await response.json();
    const status = response.status;
    return {data, status};

}

export default login;