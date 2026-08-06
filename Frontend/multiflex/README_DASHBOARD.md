# Dashboard — Multiflex

El dashboard es la subpágina que muestra el panel de solicitudes.

## Cómo funciona ahora

Empieza **vacío**. Cada vez que alguien llena el formulario de contacto
y lo envía, la solicitud se agrega al panel con su folio, su fecha
y el estado "Pendiente".

Al recargar la página el panel se vacía otra vez, porque las solicitudes
se están guardando nada más en la memoria del navegador (todavía no hay
base de datos).

## Qué tiene el panel

1. **Aviso de vacío**: cuando no hay solicitudes, con un botón al formulario.
2. **Cuatro tarjetas**: total, pendientes, en proceso y terminadas.
3. **Filtros**: botones que cambian la información de la tabla.
4. **Tabla**: folio, cliente, teléfono, servicio, fecha y estado.
5. **Gráfica**: barras con cuántas solicitudes tiene cada servicio.

## CÓMO CONECTAR LA BASE DE DATOS (para tu compañero)

Ahora mismo las solicitudes viven en `App.js`, en este useState:

```js
const [solicitudes, setSolicitudes] = useState([]);
```

Para que salgan de la base de datos hay que hacer dos cosas:

### 1. Descomentar la función que consulta la API

En `src/services/solicitudes.js` está lista, comentada al final del archivo:

```js
const URL_API = '/api/solicitudes';

export async function obtenerSolicitudes() {
  const respuesta = await fetch(URL_API);

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar las solicitudes.');
  }

  return await respuesta.json();
}
```

### 2. Usarla en App.js

Se agrega un useEffect que la llame cuando abre la aplicación:

```js
import { useEffect } from 'react';
import { obtenerSolicitudes } from './services/solicitudes';

useEffect(() => {
  async function pedirDatos() {
    const lista = await obtenerSolicitudes();
    setSolicitudes(lista);
  }
  pedirDatos();
}, []);
```

Y en `agregarSolicitud` también se manda la solicitud al backend
con un `POST /api/solicitudes`, para que quede guardada.

**El dashboard NO se toca.** Él solo recibe la lista y la muestra.

## Qué tiene que devolver la API

El endpoint `GET /api/solicitudes` debe devolver una lista en JSON,
donde cada solicitud tenga exactamente estos nombres de campo:

```json
[
  {
    "folio": "MF-20260729-4821",
    "cliente": "Juan Pérez",
    "telefono": "4491234567",
    "servicio": "Plomería",
    "fecha": "29/07/2026 20:15",
    "estado": "Pendiente"
  }
]
```

Los estados tienen que escribirse igual: `Pendiente`, `En proceso`
o `Terminada`, porque de eso dependen los filtros, las tarjetas
y los colores de las etiquetas.

## Archivos del dashboard

```
src/components/Dashboard/
├── Dashboard.js/.css              arma todo y guarda el filtro
├── Titulo/                        el título del panel
├── Texto/                         el texto de abajo del título
├── Vacio/                         aviso cuando no hay solicitudes
│   ├── Titulo/
│   ├── Texto/
│   └── Boton/
├── Resumen/                       la fila de las 4 tarjetas
│   ├── TarjetaTotal/
│   │   ├── Etiqueta/
│   │   └── Numero/
│   ├── TarjetaPendientes/  (igual: Etiqueta y Numero)
│   ├── TarjetaProceso/     (igual)
│   └── TarjetaTerminadas/  (igual)
├── Filtros/                       los botones que cambian la tabla
│   ├── BotonTodas/
│   ├── BotonPendientes/
│   ├── BotonProceso/
│   └── BotonTerminadas/
├── Tabla/                         la lista de solicitudes
│   ├── Encabezado/                los títulos de las columnas
│   ├── Fila/                      una sola fila
│   └── Vacia/                     aviso si el filtro no encuentra nada
└── Grafica/                       las barras por servicio
    ├── Titulo/
    ├── BarraPlomeria/
    ├── BarraElectricidad/
    ├── BarraPintura/
    ├── BarraImpermeabilizacion/
    ├── BarraLimpieza/
    └── BarraJardineria/
```
