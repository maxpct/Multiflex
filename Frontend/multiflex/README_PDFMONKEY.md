# Integración con PDFMonkey — Multiflex

Cuando el usuario envía el formulario de contacto, se genera automáticamente
un comprobante en PDF y aparece en la sección "Comprobante" de la página.

## 1. Crear la cuenta y la llave

1. Entra a https://pdfmonkey.io y crea tu cuenta (el plan gratis da 20 PDF al mes).
2. Ve a **API Key** en el panel y copia tu llave secreta.

## 2. Crear la plantilla

1. En el panel, entra a **Templates** y crea una plantilla nueva (HTML/CSS).
2. Copia el HTML que está más abajo y pégalo en el cuerpo de la plantilla.
3. Guarda y **publica** la plantilla.
4. Copia el **ID de la plantilla** (sale en la URL o en los datos de la plantilla).

## 3. Poner los datos en el archivo .env

Abre el archivo `.env` que está en la raíz del proyecto y llena los dos datos:

```
PDFMONKEY_API_KEY=tu_llave_secreta
REACT_APP_PDFMONKEY_TEMPLATE_ID=el_id_de_tu_plantilla
```

Fíjate que la llave NO lleva `REACT_APP_`: eso es a propósito, así se queda
en el servidor y nunca llega al navegador.

IMPORTANTE: después de cambiar el `.env` hay que **detener y volver a iniciar**
el proyecto (Ctrl + C y luego `npm start`).

## 3.1 Por qué hay un proxy (importante)

El navegador NO deja llamar directo a `api.pdfmonkey.io` (da el error
"blocked by CORS policy"), porque esa API está pensada para usarse desde
un servidor, no desde el navegador. Por eso la página le habla a
`/api/pdfmonkey` y del otro lado hay un intermediario que sí puede llamarla:

- **En tu compu (npm start):** el archivo `src/setupProxy.js`.
- **Ya publicado en Netlify:** el archivo `netlify/functions/pdfmonkey.js`.

Los dos hacen lo mismo: reciben la petición, le pegan la llave secreta
y se la mandan a PDFMonkey.

### Configurar la llave en Netlify

Cuando subas la página, ve a tu sitio en Netlify:
**Site settings -> Environment variables -> Add a variable** y agrega:

- `PDFMONKEY_API_KEY` = tu llave secreta
- `REACT_APP_PDFMONKEY_TEMPLATE_ID` = el ID de tu plantilla

Después vuelve a publicar el sitio (Deploys -> Trigger deploy).

## 4. Variables que usa la plantilla

La página le manda estos datos a PDFMonkey:

| Variable      | Qué trae                          |
|---------------|-----------------------------------|
| logo          | La dirección del logo de Multiflex |
| folio         | El folio automático (MF-20260727-4821) |
| nombre        | El nombre del cliente             |
| telefono      | El teléfono                       |
| correo        | El correo                         |
| servicio      | El servicio seleccionado          |
| descripcion   | La descripción del problema       |
| fecha         | La fecha en que se generó         |
| estado        | Siempre "Solicitud recibida"      |

## 5. HTML para la plantilla de PDFMonkey

El diseño del PDF está en el archivo **plantilla_pdf.html**, que viene
en la raíz del proyecto.

Para ponerlo:

1. Abre `plantilla_pdf.html` con el Bloc de notas o con VS Code.
2. Copia TODO el contenido.
3. Entra a pdfmonkey.io -> Templates -> abre tu plantilla -> Edit.
4. Borra lo que tenga y pega lo que copiaste.
5. Guarda y publica la plantilla.

## 6. Datos de prueba (para verlo en el editor)

En el editor de PDFMonkey busca el cuadro de **Sample data**
(o "Test payload") y pega esto. Sirve para ver cómo va a quedar
el PDF mientras lo diseñas, sin tener que llenar el formulario:

```json
{
  "logo": "https://multiflex-ags.netlify.app/logo.png",
  "folio": "MF-20260730-1234",
  "nombre": "Juan Pérez López",
  "telefono": "449 123 4567",
  "correo": "juan.perez@correo.com",
  "servicio": "Plomería",
  "descripcion": "Tengo una fuga debajo del lavabo del baño principal. Gotea desde hace tres días y ya se está manchando el mueble.",
  "fecha": "30/07/2026 14:30",
  "estado": "Solicitud recibida"
}
```

## 7. Nota sobre el logo

El logo se toma de `public/logo.png`. Mientras trabajas en `localhost`,
PDFMonkey no puede verlo (está en tu computadora), así que en el PDF
saldrá vacío. Ya publicado, el logo sí aparece.
