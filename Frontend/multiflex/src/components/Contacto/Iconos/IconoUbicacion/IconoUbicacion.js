import './IconoUbicacion.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "ubicacion.png" por el tuyo, con ese mismo nombre.
import dibujo from './ubicacion.png';

// Este es el icono de un pin de ubicación.
function IconoUbicacion() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoUbicacion;
