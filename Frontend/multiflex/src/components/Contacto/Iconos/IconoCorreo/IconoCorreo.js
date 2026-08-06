import './IconoCorreo.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "correo.png" por el tuyo, con ese mismo nombre.
import dibujo from './correo.png';

// Este es el icono de un sobre de correo.
function IconoCorreo() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoCorreo;
