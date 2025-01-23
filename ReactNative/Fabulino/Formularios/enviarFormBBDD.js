export async function enviarForm(nombre, email, clave, relacion) {
    let enviado = true;
    let peticion;
    try {
        peticion = await fetch(
            'http://172.16.0.124:8080/api/form/recibirDatos',
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
    } catch (err) {
        console.log(err);
        peticion = { ok: false };
    }

    if (!peticion.ok) {
        enviado = false;
        console.log('La petición no se ha procesado');
    }

    return enviado;
}

export async function recibirError() {
    let error = true;
    let respuesta;
    try {
        respuesta = await fetch(
            'http://172.16.0.124:8080/api/form/recibirDatos',
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

        if (respuesta.ok) {
           respuesta.text();
            console.log('Respuesta recibida');
        }
    } catch (err) {
        respuesta = { ok: false };
    }

    if (!respuesta.ok) {
        enviado = false;
        console.log('La respuesta no es valida');
    }

    return enviado;
}