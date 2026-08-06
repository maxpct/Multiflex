import './IconoReloj.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "reloj.png" por el tuyo, con ese mismo nombre.
import dibujo from './reloj.png';

// Este es el icono de un reloj.
function IconoReloj() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoReloj;
