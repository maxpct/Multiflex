import './Boton.css';

function Boton() {

  function bajarComprobante() {

    const seccion = document.querySelector('.documento-encabezado');

    if (seccion) {
      seccion.scrollIntoView({
        behavior: 'smooth'
      });
    }

  }

  return (

    <button
      className="hero-boton"
      onClick={bajarComprobante}
    >
      Ver comprobante
    </button>

  );

}

export default Boton;