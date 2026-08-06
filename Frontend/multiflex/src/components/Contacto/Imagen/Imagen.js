import './Imagen.css';

// Aquí traemos la foto que está en esta misma carpeta.
import foto from './foto.png';

// Este componente muestra una foto debajo de la tarjeta de contacto,
// para que el lado derecho de la página no se vea vacío.
function Imagen() {
  return (
    <img
      className="contact-imagen"
      src={foto}
      alt="Herramientas que usa Multiflex en sus servicios"
    />
  );
}

export default Imagen;
