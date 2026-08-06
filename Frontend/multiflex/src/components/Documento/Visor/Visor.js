import './Visor.css';

// Este componente muestra el PDF dentro de la página, a pantalla casi completa.
function Visor({ enlace }) {
  return (
    <div className="visor">
      <iframe
        className="visor-pdf"
        src={enlace}
        title="Comprobante de solicitud Multiflex"
      ></iframe>
    </div>
  );
}

export default Visor;
