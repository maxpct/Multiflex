import './Titulo.css';

// Este componente muestra el título de la sección.
function Titulo() {
  return (
    <div>
      <h3 className="nueva-titulo">Registrar solicitud por teléfono</h3>
      <p className="nueva-texto">
        Para las solicitudes que llegan por llamada o WhatsApp
      </p>
    </div>
  );
}

export default Titulo;
