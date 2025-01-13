const [partes, setPartes] = useState(() => {
  resetToques();
});

export function resetToques() {
  setPartes({
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
  let partesTmp = JSON.parse(JSON.stringify(partes));
  let numToques = partesTmp.numeroToques;

  switch (parte) {
    case 'pierna':
      numToques.piernas++;
      break;
    case 'cadera':
      numToques.caderas++;
      break;
    case 'torso':
      numToques.pechos++;
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

  partesTmp.ordenPartes.push(parte);
}

export async function mandarToques(usuario) {
  let partesTmp = JSON.parse(JSON.stringify(partes));
  let enviado = true;

  let peticion = await fetch(
    'localhost:8080/api/partesCuerpo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_usuario: usuario,
        orden: partesTmp.ordenPartes,
        numToques: partesTmp.numeroToques
      })
    }
  );

  if (!peticion.ok) {
    enviado = false;
    console.log('La petición no se ha procesado');
  }

  return enviado;
}