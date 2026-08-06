import './Imagen.css';
import imagen from './imper2.jpg';

// Este componente muestra la imagen del servicio en la vista completa.
function Imagen() {
  return (
    <img
      className="detalle-imagen"
      src={imagen}
      alt="Impermeabilización"
    />
  );
}

export default Imagen;
