import './Vacio.css';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Boton from './Boton/Boton';

// Este componente se muestra cuando todavía no hay ninguna solicitud.
function Vacio({ cambiarPagina }) {
  return (
    <div className="dash-vacio">
      <div className="dash-vacio-caja">
        <Titulo />
        <Texto />
        <Boton cambiarPagina={cambiarPagina} />
      </div>
    </div>
  );
}

export default Vacio;
