import './IconoCandado.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "candado.png" por el tuyo, con ese mismo nombre.
import dibujo from './candado.png';

// Este es el icono de un candado.
function IconoCandado() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoCandado;
