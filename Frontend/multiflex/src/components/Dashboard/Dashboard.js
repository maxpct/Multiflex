// Importamos useState y useEffect para guardar y pedir información.
import { useEffect, useState } from 'react';
import portada from '../Contacto/Encabezado/Fondo/dashboard.png';
import './Dashboard.css';

import Titulo from './Titulo/Titulo';
import Texto from './Texto/Texto';
import Vacio from './Vacio/Vacio';
import Resumen from './Resumen/Resumen';
import Filtros from './Filtros/Filtros';
import Tabla from './Tabla/Tabla';
import NuevaSolicitud from './NuevaSolicitud/NuevaSolicitud';
import Destacados from './Destacados/Destacados';
import Estadisticas from './Estadisticas/Estadisticas';

// Aquí traemos la función que filtra las solicitudes.
import { filtrarPorEstado } from '../../services/solicitudes';
import { getRequests } from '../../services/api';

// Este es el panel de solicitudes.
// Aquí se ven las cinco operaciones de la base de datos:
// crear, leer, actualizar, eliminar, y las consultas
// con subconsulta y con GROUP BY.
function Dashboard({ cambiarPagina }) {

  // Este useState guarda el filtro que eligió el usuario.
  // Empieza en 'Todas' para mostrar todo.
  const [filtro, setFiltro] = useState('Todas');

  // Aquí guardamos las solicitudes que vienen de MySQL.
  const [listaSolicitudes, setListaSolicitudes] = useState([]);

  // Esta función pide las solicitudes a la base de datos.
  // La usamos al abrir el panel y también cada vez que
  // algo cambia (se crea, se actualiza o se elimina),
  // para que la tabla siempre muestre lo que hay de verdad.
  async function cargarSolicitudes() {

    try {

      const datos = await getRequests();
      setListaSolicitudes(datos);

    } catch (error) {

      console.error('Error al cargar solicitudes:', error);

    }
  }

  // useEffect se ejecuta cuando el panel aparece en pantalla.
  useEffect(() => {

    cargarSolicitudes();

  }, []); // El [] significa que solo se hace una vez, al entrar.

  // Esta variable nos dice si ya hay solicitudes o todavía no.
  const haySolicitudes = listaSolicitudes.length > 0;

  // Estas son las solicitudes que se van a ver en la tabla.
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

        {/* Formulario para registrar una solicitud a mano (CREATE).
            Se ve siempre, aunque todavía no haya solicitudes. */}
        <NuevaSolicitud recargar={cargarSolicitudes} />

        {/* Si todavía no hay solicitudes, mostramos un aviso */}
        {!haySolicitudes && <Vacio cambiarPagina={cambiarPagina} />}

        {/* Cuando ya hay solicitudes, mostramos todo el panel */}
        {haySolicitudes && (
          <div className="dashboard-panel">

            {/* Las 4 tarjetas con los totales */}
            <Resumen solicitudes={listaSolicitudes} />

            {/* Los botones que cambian la información de la tabla */}
            <Filtros filtro={filtro} cambiarFiltro={setFiltro} />

            {/* La tabla, donde se cambia el estado (UPDATE)
                y se eliminan solicitudes (DELETE) */}
            <Tabla solicitudes={visibles} recargar={cargarSolicitudes} />

          </div>
        )}

        {/* Servicios por encima del promedio (SUBCONSULTA) */}
        <Destacados />

        {/* Solicitudes por servicio (GROUP BY) */}
        <Estadisticas />

      </div>
    </div>
  );
}

export default Dashboard;
