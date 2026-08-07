import { useState } from 'react';
import './BotonBorrar.css';

// Aquí traemos la función que borra la solicitud de la base de datos.
import { deleteRequest } from '../../../../../services/api';

// Este es el botón rojo que elimina una solicitud.
// Al presionarlo se hace un DELETE en la base de datos.
function BotonBorrar({ id, cliente, recargar }) {

  // Este useState nos dice si se está borrando,
  // para apagar el botón mientras tanto.
  const [borrando, setBorrando] = useState(false);

  // Esta función se ejecuta al presionar el botón.
  async function borrar() {

    // Primero preguntamos, porque esto no se puede deshacer.
    const seguro = window.confirm(
      '¿Seguro que quieres eliminar la solicitud de ' + cliente + '?'
    );

    if (!seguro) {
      return;
    }

    setBorrando(true);

    try {

      // Le pedimos al backend que haga el DELETE.
      await deleteRequest(id);

      // Volvemos a traer la lista para que ya no aparezca.
      recargar();

    } catch (error) {

      console.error(error);
      alert('No se pudo eliminar la solicitud.');
      setBorrando(false);

    }
  }

  return (
    <button
      className="boton-borrar"
      onClick={borrar}
      disabled={borrando}
    >
      Eliminar
    </button>
  );
}

export default BotonBorrar;
