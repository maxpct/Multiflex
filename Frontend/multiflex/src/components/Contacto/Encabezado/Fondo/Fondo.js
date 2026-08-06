import './Fondo.css';

// Aquí traemos la foto que está en esta misma carpeta.
import foto from './portada.png';

// Este componente pone la foto de fondo de la franja de arriba.
function Fondo() {
  return (
    <img
      className="contact-fondo"
      src={foto}
    />
  );
}

export default Fondo;
