// Importamos el CSS del componente.
import './Imagen.css';
import imagen from './portada.jpeg';

// Este componente muestra la imagen de fondo del hero.
function Imagen() {
  return (
    <img
      className="portada-imagen"
      src={imagen}
      alt="Trabajos de mantenimiento de Multiflex"
    />
  );
}

export default Imagen;
