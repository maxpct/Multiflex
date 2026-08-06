import './CampoTelefono.css';

// Cada campo trae su propio icono.
import IconoTelefono from '../../Iconos/IconoTelefono/IconoTelefono';

// Este es el campo donde se escribe el teléfono del cliente.
// Es HTML normal: no recibe nada ni guarda nada.
// Lo que se escriba aquí se lee hasta que se manda el formulario.
function CampoTelefono() {
  return (
    <div className="contact-campo">

      {/* La etiqueta lleva su icono azul a un lado */}
      <label className="contact-etiqueta" htmlFor="telefono">
        <IconoTelefono />
        Teléfono
      </label>

      <input
        className="contact-cuadro"
        id="telefono"
        name="telefono"
        type="tel"
        placeholder="Escribe tu phone"
        required
      />
    </div>
  );
}

export default CampoTelefono;
