import './Nota.css';
import IconoCandado from '../../Iconos/IconoCandado/IconoCandado';

// Este es el avisito de abajo del botón.
function Nota() {
  return (
    <p className="contact-nota">
      <IconoCandado />
      Tus datos están protegidos y solo se usan para atender tu solicitud.
    </p>
  );
}

export default Nota;
