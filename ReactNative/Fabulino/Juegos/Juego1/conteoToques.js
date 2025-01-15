let partes = {
  ordenPartes: [],
  numeroToques: {
    piernas: 0,
    caderas: 0,
    pecho: 0,
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
      pecho: 0,
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
      numToques.pecho++;
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

<<<<<<< HEAD
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
        numToques: partesTmp.numeroToques,
      })
    },
  );
 
=======
  let peticion;
  try {
    peticion = await fetch(
      'http://localhost:8080/api/partesCuerpo',
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
  } catch (err) {
    peticion = {ok: false};
  }

>>>>>>> origin/dev
  if (!peticion.ok) {
    enviado = false;
    console.log('La petición no se ha procesado');
  }else{
    console.log('La petición se ha procesado');

  }

  return enviado;
}