// Importamos useState para guardar cosas que cambian.
import { useState } from 'react';

// Aquí se juntan todos los componentes de la página.
import Barra from './components/Barra/Barra';
import Portada from './components/Portada/Portada';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Documento from './components/Documento/Documento';
import Dashboard from './components/Dashboard/Dashboard';
import Pie from './components/Pie/Pie';

function App() {

  // Este useState guarda en qué página estamos.
  // Empieza en 'inicio' porque es la primera que se ve.
  const [pagina, setPagina] = useState('inicio');

  // Este useState guarda el comprobante en PDF que se generó.
  // Empieza en null porque todavía no se ha enviado el formulario.
  const [pdf, setPdf] = useState(null);

  // Este useState guarda la lista de solicitudes que se han enviado.
  // Empieza como lista vacía porque todavía no hay ninguna.
  // Cuando exista la base de datos, de aquí saldrán las guardadas.
  const [solicitudes, setSolicitudes] = useState([]);

  // Esta función cambia de página y además sube hasta arriba.
  // Si no subiéramos, la página nueva aparecería a la mitad,
  // porque el navegador se queda donde estabas.
  function irAPagina(nombre) {

    setPagina(nombre);

    // Sube hasta el principio de la página.
    window.scrollTo(0, 0);
  }

  // Esta función agrega una solicitud nueva a la lista.
  // La usa el formulario cada vez que alguien manda una.
  function agregarSolicitud(nueva) {

    // Armamos una lista con la nueva primero
    // y después todas las que ya estaban.
    const lista = [nueva].concat(solicitudes);

    setSolicitudes(lista);
  }

  return (
    <div>

      {/* La barra siempre se ve. Le pasamos setPagina para que
          sus enlaces puedan cambiar de página. */}
      <Barra paginaActual={pagina} cambiarPagina={irAPagina} />

      {/* Aquí abajo solo se muestra la página en la que estamos */}

      {/* Página de inicio: aquí van juntos el banner y los servicios */}
      {pagina === 'inicio' && (
        <div className="pagina-inicio">
          <Portada cambiarPagina={irAPagina} />
          <Servicios />
        </div>
      )}

      {/* Subpágina de contacto. El formulario guarda aquí
          el PDF y también la solicitud para el dashboard. */}
      {pagina === 'contacto' && (
        <Contacto
          guardarPdf={setPdf}
          guardarSolicitud={agregarSolicitud}
          cambiarPagina={irAPagina}
        />
      )}

      {/* Subpágina del comprobante, donde se ve el PDF */}
      {pagina === 'comprobante' && (
        <Documento pdf={pdf} cambiarPagina={irAPagina} />
      )}

      {/* Subpágina del dashboard, con las solicitudes */}
      {pagina === 'dashboard' && (
        <Dashboard solicitudes={solicitudes} cambiarPagina={irAPagina} />
      )}

      {/* El pie también siempre se ve */}
      <Pie />
    </div>
  );
}

export default App;
