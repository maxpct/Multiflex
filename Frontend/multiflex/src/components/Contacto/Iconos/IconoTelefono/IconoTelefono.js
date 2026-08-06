import './IconoTelefono.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "telefono.png" por el tuyo, con ese mismo nombre.
import dibujo from './telefono.png';

// Este es el icono de un teléfono.
function IconoTelefono() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoTelefono;
