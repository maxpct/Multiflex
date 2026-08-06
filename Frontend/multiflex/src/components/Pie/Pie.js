import './Pie.css';
import Logo from './Logo/Logo';

// Pie de página con el nombre del negocio y los datos de contacto.
function Pie() {
  return (
    <div className="pie">
      <div className="pie-contenido">
        {/* Logo del negocio */}
        <Logo />

        <p className="pie-nombre">Multiflex</p>
        <p>Mantenimiento y reparación para tu hogar y negocio en Aguascalientes.</p>
        <p>Tel. 449 393 9629  </p>
        <p>contacto@multiflex.com</p>
        <p className="pie-derechos">© 2026 Multiflex.</p>
      </div>
    </div>
  );
}

export default Pie;
