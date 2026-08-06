import './Pasos.css';
import PasoUno from './PasoUno/PasoUno';
import PasoDos from './PasoDos/PasoDos';
import PasoTres from './PasoTres/PasoTres';

// Esta es la fila con los tres pasos que explican
// cómo se consigue el comprobante en PDF.
// Sirve para que la página no se vea vacía y para que
// el cliente entienda cómo funciona.
function Pasos() {
  return (
    <div className="pasos-caja">
      <p className="pasos-titulo">¿Cómo funciona?</p>

      <div className="pasos">
        <PasoUno />
        <PasoDos />
        <PasoTres />
      </div>
    </div>
  );
}

export default Pasos;
