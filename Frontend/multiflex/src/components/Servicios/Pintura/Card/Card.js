// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './pintura1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">

      <img
        className="card-imagen"
        src={imagen}
        alt="Pintura"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Pintura</h3>
        <p className="card-texto">Pintura de interiores y exteriores, resane y acabados.</p>
        <span className="card-precio">Desde $50 MXN/m²</span>
      </div>
    </div>
  );
}

export default Card;
