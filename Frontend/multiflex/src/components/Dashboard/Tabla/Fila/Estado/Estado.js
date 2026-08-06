import './Estado.css';

// Esta es la etiqueta de color que dice cómo va la solicitud.
// Recibe el estado y le pone el color que le toca.
function Estado({ estado }) {

  // Empezamos suponiendo que está terminada (verde).
  let clases = 'estado estado-terminada';

  // Si está pendiente, la ponemos amarilla.
  if (estado === 'Pendiente') {
    clases = 'estado estado-pendiente';
  }

  // Si está en proceso, la ponemos morada.
  if (estado === 'En proceso') {
    clases = 'estado estado-proceso';
  }

  return <span className={clases}>{estado}</span>;
}

export default Estado;
