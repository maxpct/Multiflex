import './CampoProblema.css';

// Este campo trae su propio icono.
import IconoMensaje from '../../Iconos/IconoMensaje/IconoMensaje';

// Este es el cuadro donde el cliente describe lo que necesita.
// Es HTML normal: no recibe nada ni guarda nada.
function CampoProblema() {
  return (
    <div className="contact-campo">

      <label className="contact-etiqueta" htmlFor="mensaje">
        <IconoMensaje />
        Describe el problema
      </label>

      <textarea
        className="contact-cuadro contact-area"
        id="mensaje"
        name="mensaje"
        rows="3"
        placeholder="Cuéntanos el problema que tienes"
      ></textarea>
    </div>
  );
}

export default CampoProblema;
