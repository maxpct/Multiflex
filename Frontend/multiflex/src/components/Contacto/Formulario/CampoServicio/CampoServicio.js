import './CampoServicio.css';

// Este campo trae su propio icono.
import IconoMaletin from '../../Iconos/IconoMaletin/IconoMaletin';

// Esta es la lista para escoger el servicio que se necesita.
// Es HTML normal: no recibe nada ni guarda nada.
function CampoServicio() {
  return (
    <div className="contact-campo">

      <label className="contact-etiqueta" htmlFor="servicio">
        <IconoMaletin />
        Servicio
      </label>

      <select
        className="contact-cuadro"
        id="servicio"
        name="servicio"
        required
      >
        <option value="">Selecciona un servicio</option>
        <option>Plomería</option>
        <option>Electricidad</option>
        <option>Pintura</option>
        <option>Impermeabilización</option>
        <option>Limpieza</option>
        <option>Jardinería</option>
      </select>
    </div>
  );
}

export default CampoServicio;
