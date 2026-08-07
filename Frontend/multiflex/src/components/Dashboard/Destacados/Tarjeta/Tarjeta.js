import './Tarjeta.css';

// Esta es la tarjeta de un servicio destacado.
// Recibe el nombre, el precio y la descripción.
function Tarjeta({ nombre, precio, descripcion }) {
  return (
    <div className="destacado">
      <p className="destacado-nombre">{nombre}</p>
      <p className="destacado-precio">${precio}</p>
      <p className="destacado-descripcion">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
