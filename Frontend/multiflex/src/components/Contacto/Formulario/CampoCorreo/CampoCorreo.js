import './CampoCorreo.css';

// Cada campo trae su propio icono.
import IconoCorreo from '../../Iconos/IconoCorreo/IconoCorreo';

// Este es el campo donde se escribe el correo del cliente.
// Es HTML normal: no recibe nada ni guarda nada.
// Lo que se escriba aquí se lee hasta que se manda el formulario.
function CampoCorreo() {
  return (
    <div className="contact-campo">

      {/* La etiqueta lleva su icono azul a un lado */}
      <label className="contact-etiqueta" htmlFor="correo">
        <IconoCorreo />
        Correo
      </label>

      <input
        className="contact-cuadro"
        id="correo"
        name="correo"
        type="email"
        placeholder="tucorreo@ejemplo.com"
        required
      />
    </div>
  );
}

export default CampoCorreo;
