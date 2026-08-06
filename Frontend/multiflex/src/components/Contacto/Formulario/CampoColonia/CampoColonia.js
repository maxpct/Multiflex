import './CampoColonia.css';

// Cada campo trae su propio icono.
import IconoUbicacion from '../../Iconos/IconoUbicacion/IconoUbicacion';

// Este es el campo donde se escribe la colonia donde se hará el trabajo.
// Es HTML normal: no recibe nada ni guarda nada.
// Lo que se escriba aquí se lee hasta que se manda el formulario.
function CampoColonia() {
  return (
    <div className="contact-campo">

      {/* La etiqueta lleva su icono azul a un lado */}
      <label className="contact-etiqueta" htmlFor="colonia">
        <IconoUbicacion />
        Colonia o ubicación
      </label>

      <input
        className="contact-cuadro"
        id="colonia"
        name="colonia"
        type="text"
        placeholder="Ej. pilar white"
      />
    </div>
  );
}

export default CampoColonia;
