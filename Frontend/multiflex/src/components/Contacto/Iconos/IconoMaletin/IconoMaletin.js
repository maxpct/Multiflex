import './IconoMaletin.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "maletin.png" por el tuyo, con ese mismo nombre.
import dibujo from './maletin.png';

// Este es el icono de un maletín de herramientas.
function IconoMaletin() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoMaletin;
