import './Imagen.css';
import imagen from './limpieza2.jpg';

// Este componente muestra la imagen del servicio en la vista completa.
function Imagen() {
  return (

    <img
      className="detalle-imagen card-imagen-limpieza"
      src={imagen}
      alt="Limpieza"
    />
  );
}

export default Imagen;
