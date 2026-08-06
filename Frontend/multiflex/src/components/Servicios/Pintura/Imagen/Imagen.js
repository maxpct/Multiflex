import './Imagen.css';
import imagen from './pintura2.jpg';

// Este componente muestra la imagen del servicio en la vista completa.
function Imagen() {
  return (

    <img
      className="detalle-imagen"
      src={imagen}
      alt="Pintura"
    />
  );
}

export default Imagen;
