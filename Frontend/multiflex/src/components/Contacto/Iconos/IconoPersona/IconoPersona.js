import './IconoPersona.css';

// Aquí traemos la imagen que está en esta misma carpeta.
// Para cambiar el icono solo hay que reemplazar el archivo
// "persona.png" por el tuyo, con ese mismo nombre.
import dibujo from './persona.png';

// Este es el icono de una persona.
function IconoPersona() {
  return (
    <img
      className="contact-icono"
      src={dibujo}
      alt=""
    />
  );
}

export default IconoPersona;
