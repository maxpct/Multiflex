// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './limpieza1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">

      <img
        className="card-imagen"
        src={imagen}
        alt="Limpieza"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Limpieza</h3>
        <p className="card-texto">Limpieza profunda de hogares y comercios: pisos, vidrios y baños.</p>
        <span className="card-precio">Desde $500 MXN</span>
      </div>
    </div>
  );
}

export default Card;
