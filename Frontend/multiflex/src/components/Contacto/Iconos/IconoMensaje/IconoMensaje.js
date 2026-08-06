import './IconoMensaje.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "mensaje.png" por el tuyo, con ese mismo nombre.
import dibujo from './mensaje.png';

// Este es el icono de un mensaje.
function IconoMensaje() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoMensaje;
