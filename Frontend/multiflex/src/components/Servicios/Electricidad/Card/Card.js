// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './electricidad1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">
      <img
        className="card-imagen"
        src={imagen}
        alt="Electricidad"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Electricidad</h3>
        <p className="card-texto">Instalación y reparación de contactos, apagadores, lámparas y cableado.</p>
        <span className="card-precio">Desde $400 MXN</span>
      </div>
    </div>
  );
}

export default Card;
