import './DatoTelefono.css';
import IconoTelefono from '../../Iconos/IconoTelefono/IconoTelefono';

// Este renglón muestra el teléfono del negocio.
function DatoTelefono() {
  return (
    <p className="contact-dato">
      <IconoTelefono />

      {/* Al darle clic desde el celular, marca el número */}
      <a className="contact-dato-enlace" href="tel:4493939629">
        449 393 9629
      </a>
    </p>
  );
}

export default DatoTelefono;
