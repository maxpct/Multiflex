import './Servicios.css';
import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';

// Cada servicio es su propio componente, dentro de su carpeta.
import Plomeria from './Plomeria/Plomeria';
import Electricidad from './Electricidad/Electricidad';
import Pintura from './Pintura/Pintura';
import Impermeabilizacion from './Impermeabilizacion/Impermeabilizacion';
import Limpieza from './Limpieza/Limpieza';
import Jardineria from './Jardineria/Jardineria';

// Aquí se muestran los servicios.
function Servicios() {
  return (
    <div className="servicios" id="servicios">
      <div className="servicios-contenido">
        {/* Título de la sección */}
        <Titulo />
        <Texto />

        {/* Las 6 tarjetas, una por una */}
        <div className="tarjetas">
          <Plomeria />
          <Electricidad />
          <Pintura />
          <Impermeabilizacion />
          <Limpieza />
          <Jardineria />
        </div>
      </div>
    </div>
  );
}

export default Servicios;
