// Importamos el CSS de la tarjeta.
import './Card.css';
import imagen from './imper1.jpg';

// Esta es la tarjeta pequeña que se ve en la lista de servicios.
function Card() {
  return (
    <div className="card">

      <img
        className="card-imagen"
        src={imagen}
        alt="Impermeabilización"
      />

      <div className="card-texto-caja">
        <h3 className="card-titulo">Impermeabilización</h3>
        <p className="card-texto">Aplicación y mantenimiento de impermeabilizante en azoteas.</p>
        <span className="card-precio">Desde $80 MXN/m²</span>
      </div>
    </div>
  );
}

export default Card;
