import './Imagen.css';
import imagen from './plomeria2.jpg';

// Este componente muestra la imagen del servicio en la vista completa.
function Imagen() {
  return (
    
    <img
      className="detalle-imagen card-imagen-plomeria"
      src={imagen}
      alt="Plomería"
    />
  );
}

export default Imagen;
