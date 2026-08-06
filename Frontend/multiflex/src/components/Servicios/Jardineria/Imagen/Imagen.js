import './Imagen.css';
import imagen from './jardineria2.jpg';

// Este componente muestra la imagen del servicio en la vista completa.
function Imagen() {
  return (

    <img
      className="detalle-imagen"
      src={imagen}
      alt="Jardinería"
    />
  );
}

export default Imagen;
