import './Informacion.css';
import Titulo from './Titulo/Titulo';
import DatoTelefono from './DatoTelefono/DatoTelefono';
import DatoCorreo from './DatoCorreo/DatoCorreo';
import DatoUbicacion from './DatoUbicacion/DatoUbicacion';
import DatoHorario from './DatoHorario/DatoHorario';

// Esta es la tarjeta blanca de "Contacto directo",
// la que va del lado derecho del formulario.
function Informacion() {
  return (
    <div className="contact-tarjeta">
      <Titulo />

      <DatoTelefono />
      <DatoCorreo />
      <DatoUbicacion />
      <DatoHorario />

    </div>
  );
}

export default Informacion;
