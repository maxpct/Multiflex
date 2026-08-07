import { useState } from 'react';
import './Formulario.css';

// Aquí traemos la función que guarda la solicitud en la base de datos.
import { createRequest } from '../../../../services/api';

// Este es el formulario para registrar una solicitud a mano.
// Aquí se usa el CREATE: los datos se guardan en MySQL.
function Formulario({ recargar, cerrar }) {

  // Este useState nos dice si se está guardando,
  // para apagar el botón mientras tanto.
  const [guardando, setGuardando] = useState(false);

  // Esta función se ejecuta al presionar el botón Guardar.
  async function manejarEnvio(e) {

    // Evita que la página se recargue.
    e.preventDefault();

    // Como cada campo tiene su name, sacamos lo que
    // se escribió directamente del formulario.
    const f = e.target;

    const datos = {
      nombre: f.nombre.value,
      telefono: f.telefono.value,
      correo: f.correo.value,
      colonia: f.colonia.value,
      servicio: f.servicio.value,
      mensaje: f.mensaje.value,
    };

    setGuardando(true);

    try {

      // Le pedimos al backend que la guarde.
      await createRequest(datos);

      // Volvemos a traer la lista para que aparezca la nueva.
      recargar();

      // Y cerramos el formulario.
      cerrar();

    } catch (error) {

      console.error(error);
      alert('No se pudo registrar la solicitud.');
      setGuardando(false);

    }
  }

  return (
    <form className="nueva-formulario" onSubmit={manejarEnvio}>

      <div className="nueva-fila">

        <div className="nueva-campo">
          <label htmlFor="n-nombre">Nombre del cliente</label>
          <input id="n-nombre" name="nombre" type="text" required />
        </div>

        <div className="nueva-campo">
          <label htmlFor="n-telefono">Teléfono</label>
          <input id="n-telefono" name="telefono" type="tel" required />
        </div>

        <div className="nueva-campo">
          <label htmlFor="n-correo">Correo</label>
          <input id="n-correo" name="correo" type="email" required />
        </div>

      </div>

      <div className="nueva-fila">

        <div className="nueva-campo">
          <label htmlFor="n-servicio">Servicio</label>
          <select id="n-servicio" name="servicio" required>
            <option value="">Selecciona un servicio</option>
            <option>Plomería</option>
            <option>Electricidad</option>
            <option>Pintura</option>
            <option>Impermeabilización</option>
            <option>Limpieza</option>
            <option>Jardinería</option>
          </select>
        </div>

        <div className="nueva-campo">
          <label htmlFor="n-colonia">Colonia</label>
          <input id="n-colonia" name="colonia" type="text" required />
        </div>

      </div>

      <div className="nueva-campo">
        <label htmlFor="n-mensaje">Qué necesita</label>
        <textarea id="n-mensaje" name="mensaje" rows="2"></textarea>
      </div>

      <button
        type="submit"
        className="nueva-guardar"
        disabled={guardando}
      >
        {guardando ? 'Guardando...' : 'Guardar solicitud'}
      </button>

    </form>
  );
}

export default Formulario;
