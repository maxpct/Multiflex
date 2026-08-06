import './DatoCorreo.css';
import IconoCorreo from '../../Iconos/IconoCorreo/IconoCorreo';

// Este renglón muestra el correo del negocio.
function DatoCorreo() {
  return (
    <p className="contact-dato">
      <IconoCorreo />

      {/* Al darle clic se abre el correo */}
      <a className="contact-dato-enlace">
        contacto@multiflex.com
      </a>
    </p>
  );
}

export default DatoCorreo;
