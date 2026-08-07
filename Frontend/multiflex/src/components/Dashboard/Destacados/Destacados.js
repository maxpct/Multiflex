import { useEffect, useState } from 'react';
import './Destacados.css';
import Titulo from './Titulo/Titulo';
import Tarjeta from './Tarjeta/Tarjeta';

// Aquí traemos la función que consulta los servicios destacados.
import { getPremiumServices } from '../../../services/api';

// Esta sección muestra los servicios cuyo precio está por encima
// del promedio de todos los servicios.
//
// Para sacarlos, el backend usa una SUBCONSULTA (subquery):
// se compara el precio de cada servicio contra el promedio,
// y ese promedio se calcula con otra consulta dentro de la misma.
function Destacados() {

  // Aquí guardamos los servicios que llegan de la base de datos.
  const [servicios, setServicios] = useState([]);

  // useEffect se ejecuta cuando la sección aparece en pantalla.
  useEffect(() => {

    async function cargar() {
      try {
        const datos = await getPremiumServices();
        setServicios(datos);
      } catch (error) {
        console.error('Error al cargar servicios destacados:', error);
      }
    }

    cargar();

  }, []); // El [] significa que solo se hace una vez.

  // Si no llegó nada, no mostramos la sección.
  if (servicios.length === 0) {
    return null;
  }

  // Armamos una tarjeta por cada servicio.
  const tarjetas = [];

  for (let i = 0; i < servicios.length; i++) {
    tarjetas[i] = (
      <Tarjeta
        key={servicios[i].nombre}
        nombre={servicios[i].nombre}
        precio={servicios[i].precio}
        descripcion={servicios[i].descripcion}
      />
    );
  }

  return (
    <div className="destacados">
      <Titulo />
      <div className="destacados-lista">{tarjetas}</div>
    </div>
  );
}

export default Destacados;
