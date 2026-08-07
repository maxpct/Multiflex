import { useState } from 'react';
import './Estado.css';

// Aquí traemos la función que actualiza el estado en la base de datos.
import { updateRequestStatus } from '../../../../../services/api';

// Estos son los estados que existen en la tabla "estados" de la base.
// El número es el id_estado que guarda MySQL.
const ESTADOS = [
  { id: 1, nombre: 'Pendiente' },
  { id: 2, nombre: 'Aceptada' },
  { id: 3, nombre: 'En proceso' },
  { id: 4, nombre: 'Finalizada' },
  { id: 5, nombre: 'Cancelada' },
];

// Esta es la lista para cambiar el estado de una solicitud.
// Al escoger otro estado se hace un UPDATE en la base de datos.
function Estado({ id, estado, recargar }) {

  // Este useState nos dice si se está guardando el cambio,
  // para apagar la lista mientras tanto y que no le den dos veces.
  const [guardando, setGuardando] = useState(false);

  // Armamos el nombre de la clase para pintarla del color que le toca.
  // Por ejemplo: "estado estado-pendiente"
  const clase = 'estado estado-' + estado.toLowerCase().replace(' ', '-');

  // Esta función se ejecuta cuando el usuario escoge otro estado.
  async function cambiar(e) {

    // Este es el id del estado nuevo que escogió.
    const nuevo = e.target.value;

    setGuardando(true);

    try {

      // Le pedimos al backend que haga el UPDATE.
      await updateRequestStatus(id, nuevo);

      // Volvemos a traer la lista para que se vea el cambio.
      recargar();

    } catch (error) {

      console.error(error);
      alert('No se pudo cambiar el estado.');

    }

    setGuardando(false);
  }

  // Buscamos el id que le toca al estado que trae la solicitud.
  let idActual = 1;

  for (let i = 0; i < ESTADOS.length; i++) {
    if (ESTADOS[i].nombre === estado) {
      idActual = ESTADOS[i].id;
    }
  }

  return (
    <select
      className={clase}
      value={idActual}
      onChange={cambiar}
      disabled={guardando}
    >
      <option value="1">Pendiente</option>
      <option value="2">Aceptada</option>
      <option value="3">En proceso</option>
      <option value="4">Finalizada</option>
      <option value="5">Cancelada</option>
    </select>
  );
}

export default Estado;
