export async function enviarFormBBDD(nombre, email, clave, relacion) {
    let enviado = true;
    let peticion;
    try{
    peticion = await fetch(
        'http://localhost:8080/api/registro',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                correo: email,
                contraseña: clave,
                tipo: relacion
            })
        }
    );
}catch(err){
    peticion = {ok: false};
}

    if (!peticion.ok) {
        enviado = false;
        console.log('La petición no se ha procesado');
    }

    return enviado;
}