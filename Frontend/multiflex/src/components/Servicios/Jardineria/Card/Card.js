// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './jardineria1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">

      <img
        className="card-imagen"
        src={imagen}
        alt="Jardinería"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Jardinería</h3>
        <p className="card-texto">Poda, corte de césped y mantenimiento de áreas verdes.</p>
        <span className="card-precio">Desde $300 MXN</span>
      </div>
    </div>
  );
}

export default Card;
