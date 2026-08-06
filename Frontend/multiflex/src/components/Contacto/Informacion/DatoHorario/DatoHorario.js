import './DatoHorario.css';
import IconoReloj from '../../Iconos/IconoReloj/IconoReloj';

// Este renglón muestra el horario de atención.
function DatoHorario() {
  return (
    <p className="contact-dato">
      <IconoReloj />
      Lun a Sáb, 8:00 – 18:00
    </p>
  );
}

export default DatoHorario;
