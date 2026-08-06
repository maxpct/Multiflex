import { useState } from 'react';
import './Barra.css';
import Logo from './Logo/Logo';
import Titulo from './Titulo/Titulo';
import Enlaces from './Enlaces/Enlaces';

// Barra de arriba: el logo y los enlaces del menú.
// Recibe cambiarPagina para poder movernos entre las subpáginas.
function Barra({ paginaActual, cambiarPagina }) {

  // Este useState guarda si el menú (en celular) está abierto o cerrado.
  const [abierto, setAbierto] = useState(false);

  // Esta función cambia de página y además cierra el menú del celular.
  function irA(nombre) {
    cambiarPagina(nombre);
    setAbierto(false);
  }

  return (
    <div className="barra">
      <div className="barra-contenido">

        {/* Logo del negocio. Al hacer clic regresa al inicio. */}
        <div className="logo" onClick={() => irA('inicio')}>
          <Logo />
          <Titulo />
        </div>

        {/* Botón de menú (solo se ve en celular). Abre o cierra el menú. */}
        <button className="menu-boton" onClick={() => setAbierto(!abierto)}>☰</button>

        {/* Si el menú está abierto le agregamos la clase para mostrarlo */}
        <div className={abierto ? 'menu menu-abierto' : 'menu'}>
          <Enlaces paginaActual={paginaActual} cambiarPagina={irA} />
        </div>
      </div>
    </div>
  );
}

export default Barra;
