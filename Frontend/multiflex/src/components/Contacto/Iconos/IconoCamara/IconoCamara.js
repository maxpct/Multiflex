import './IconoCamara.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "camara.png" por el tuyo, con ese mismo nombre.
import dibujo from './camara.png';

// Este es el icono de una cámara.
function IconoCamara() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoCamara;
