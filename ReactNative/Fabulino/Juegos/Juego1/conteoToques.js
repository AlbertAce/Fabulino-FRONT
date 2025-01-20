let partes = {
  ordenPartes: [],
  numeroToques: {
    piernas: 0,
    caderas: 0,
    pechos: 0,
    brazos: 0,
    cabeza: 0,
    boca: 0
  }
};

export function resetToques() {
  partes = ({
    ordenPartes: [
    ],
    numeroToques: {
      piernas: 0,
      caderas: 0,
      pechos: 0,
      brazos: 0,
      cabeza: 0,
      boca: 0
    }
  });
}

export function contarToque(parte) {
  parte = parte.trim().toLowerCase();
  let numToques = partes.numeroToques;

  switch (parte) {
    case 'pierna':
      numToques.piernas++;
      break;
    case 'cadera':
      numToques.caderas++;
      break;
    case 'pecho':
      numToques.pechos++;
      parte = parte+'s';
      break;
    case 'brazo':
      numToques.brazos++;
      break;
    case 'cabeza':
      numToques.cabeza++;
      break;
    case 'boca':
      numToques.boca++;
  }

  partes.ordenPartes.push(parte);

  console.log(partes);
}

export async function mandarToques(usuario) {
  let partesTmp = JSON.parse(JSON.stringify(partes));
  let enviado = true;

  let peticion;
  try {
    peticion = await fetch(
      'http://172.16.0.168:8080/api/juegoToques/recibirDatos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: usuario,
          ordenToques: partesTmp.ordenPartes,
          numToques: partesTmp.numeroToques
        })
      }
    );
  } catch (err) {
    console.log(err);
    peticion = {ok: false};
  }

  if (!peticion.ok) {
    enviado = false;
    console.log('La petición no se ha procesado');
  }else{
    console.log('La petición se ha procesado');

  }

  return enviado;
}