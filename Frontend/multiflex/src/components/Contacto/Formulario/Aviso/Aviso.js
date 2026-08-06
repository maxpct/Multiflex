import './Aviso.css';

// Este componente muestra un mensaje amable si el PDF no se pudo generar.
function Aviso({ texto }) {
  return <p className="aviso">{texto}</p>;
}

export default Aviso;
