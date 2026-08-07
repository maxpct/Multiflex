import './Titulo.css';

// Este componente muestra el título de la sección.
function Titulo() {
  return (
    <div>
      <h3 className="estadisticas-titulo">Solicitudes por servicio</h3>
      <p className="estadisticas-texto">
        Consulta con GROUP BY: agrupa las solicitudes por servicio
        y cuenta cuántas tiene cada uno
      </p>
    </div>
  );
}

export default Titulo;
