import './Titulo.css';

// Este componente muestra el título de la sección.
function Titulo() {
  return (
    <div>
      <h3 className="destacados-titulo">Servicios por encima del promedio</h3>
      <p className="destacados-texto">
        Consulta con subconsulta: compara el precio de cada servicio
        contra el promedio de todos
      </p>
    </div>
  );
}

export default Titulo;
