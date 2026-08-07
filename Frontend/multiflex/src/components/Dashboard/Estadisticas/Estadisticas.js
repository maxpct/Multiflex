import { useEffect, useState } from 'react';
import './Estadisticas.css';
import Titulo from './Titulo/Titulo';
import Barra from './Barra/Barra';

// Aquí traemos la función que consulta las estadísticas.
import { getServiceStatistics } from '../../../services/api';

// Esta sección muestra cuántas solicitudes tiene cada servicio.
//
// Los datos salen de una consulta con GROUP BY y HAVING:
// agrupa las solicitudes por servicio, las cuenta con COUNT
// y solo deja los que tienen al menos una.
function Estadisticas() {

  // Aquí guardamos las estadísticas que llegan de la base de datos.
  const [datos, setDatos] = useState([]);

  // useEffect se ejecuta cuando la sección aparece en pantalla.
  useEffect(() => {

    async function cargar() {
      try {
        const lista = await getServiceStatistics();
        setDatos(lista);
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    }

    cargar();

  }, []); // El [] significa que solo se hace una vez.

  // Si no llegó nada, no mostramos la sección.
  if (datos.length === 0) {
    return null;
  }

  // Buscamos el número más alto, para que esa barra sea la más larga.
  let mayor = 0;

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].totalSolicitudes > mayor) {
      mayor = datos[i].totalSolicitudes;
    }
  }

  // Armamos una barra por cada servicio.
  const barras = [];

  for (let i = 0; i < datos.length; i++) {

    // Calculamos qué tan larga debe verse la barra.
    // Si el mayor es 4 y este tiene 2, la barra mide el 50%.
    const ancho = (datos[i].totalSolicitudes / mayor) * 100 + '%';

    barras[i] = (
      <Barra
        key={datos[i].nombre}
        nombre={datos[i].nombre}
        numero={datos[i].totalSolicitudes}
        ancho={ancho}
      />
    );
  }

  return (
    <div className="estadisticas">
      <Titulo />
      <div className="estadisticas-lista">{barras}</div>
    </div>
  );
}

export default Estadisticas;
