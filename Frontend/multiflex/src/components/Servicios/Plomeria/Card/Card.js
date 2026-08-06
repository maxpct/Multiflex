// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './plomeria1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">
      <img
        className="card-imagen"
        src={imagen}
        alt="Plomería"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Plomería</h3>
        <p className="card-texto">Reparación de fugas, instalación de tuberías, llaves, WC y calentadores.</p>
        <span className="card-precio">Desde $350 MXN</span>
      </div>
    </div>
  );
}

export default Card;
