import './CampoNombre.css';

// Cada campo trae su propio icono.
import IconoPersona from '../../Iconos/IconoPersona/IconoPersona';

// Este es el campo donde se escribe el nombre del cliente.
// Es HTML normal: no recibe nada ni guarda nada.
// Lo que se escriba aquí se lee hasta que se manda el formulario.
function CampoNombre() {
  return (
    <div className="contact-campo">

      {/* La etiqueta lleva su icono azul a un lado */}
      <label className="contact-etiqueta" htmlFor="nombre">
        <IconoPersona />
        Nombre
      </label>

      <input
        className="contact-cuadro"
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Escribe tu name"
        required
      />
    </div>
  );
}

export default CampoNombre;
