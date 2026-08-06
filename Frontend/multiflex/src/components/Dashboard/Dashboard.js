// Importamos useState para guardar el filtro que elige el usuario.
import { useEffect,useState } from 'react';
import portada from '../Contacto/Encabezado/Fondo/dashboard.png';
import './Dashboard.css';

import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Vacio from './Vacio/Vacio';
import Resumen from './Resumen/Resumen';
import Filtros from './Filtros/Filtros';
import Tabla from './Tabla/Tabla';
import Grafica from './Grafica/Grafica';

// Aquí traemos la función que filtra las solicitudes.
import { filtrarPorEstado } from '../../services/solicitudes';
import { getRequests } from '../../services/api';

// Este es el panel de solicitudes.
// Recibe la lista de solicitudes que se han enviado desde el formulario.
function Dashboard({ solicitudes, cambiarPagina }) {

  // Este useState guarda el filtro que eligió el usuario.
  // Empieza en 'Todas' para mostrar todo.
  const [filtro, setFiltro] = useState('Todas');
  // Aquí guardaremos las solicitudes que vienen de MySQL.
  const [listaSolicitudes, setListaSolicitudes] = useState([]);

  useEffect(() => {
    async function cargarSolicitudes() {
      try {
        const datos = await getRequests();
        setListaSolicitudes(datos);
      } catch (error) {
        console.error('Error al cargar solicitudes:', error);
      }
    }
    cargarSolicitudes();
  }, []);

  // Esta variable nos dice si ya hay solicitudes o todavía no.
  const haySolicitudes = listaSolicitudes.length > 0;

  // Estas son las solicitudes que se van a ver en la tabla.
  // El servicio se encarga de escoger las que sirven.
  const visibles = filtrarPorEstado(listaSolicitudes, filtro);
  return (
    <div className="dashboard">
      
      <img
        className='dashboard-fondo'
        src={portada}
        alt="Fondo del dashboard"
      />

      <div className="dashboard-contenido">

        <Titulo />
        <Texto />

        {/* Si todavía no hay solicitudes, mostramos un aviso */}
        {!haySolicitudes && <Vacio cambiarPagina={cambiarPagina} />}

        {/* Cuando ya hay solicitudes, mostramos todo el panel */}
        {haySolicitudes && (
          <div className="dashboard-panel">

            {/* Las 4 tarjetas con los totales */}
            <Resumen solicitudes={listaSolicitudes} />

            {/* Los botones que cambian la información de la tabla */}
            <Filtros filtro={filtro} cambiarFiltro={setFiltro} />

            {/* La tabla con las solicitudes */}
            <Tabla solicitudes={visibles} />

            {/* La gráfica de barras por servicio */}
            <Grafica solicitudes={listaSolicitudes} />

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
