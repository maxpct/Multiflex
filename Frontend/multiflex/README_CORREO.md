# API de correos (Resend) — Multiflex

Cuando un cliente envía el formulario, además de generarse el PDF,
a Multiflex le llega un correo con todos los datos y el enlace del comprobante.

## 1. Crear la cuenta y la llave

1. Entra a https://resend.com y crea tu cuenta (te puedes registrar con tu correo).
2. En el panel entra a **API Keys** y presiona **Create API Key**.
3. Cópiala (empieza con `re_`). Solo se muestra una vez.

## 2. Poner los datos en el .env

Abre el archivo `.env` y llena estos dos:

```
RESEND_API_KEY=re_tu_llave
REACT_APP_CORREO_MULTIFLEX=tu_correo@ejemplo.com
```

Después detén el proyecto y vuelve a iniciarlo con `npm start`.

## 3. IMPORTANTE: a qué correos se puede mandar

Mientras no tengas un dominio propio verificado, Resend solo deja mandar
correos **al mismo correo con el que te registraste**. Por eso en
`REACT_APP_CORREO_MULTIFLEX` hay que poner ese correo.

Si algún día Multiflex tuviera su dominio (por ejemplo multiflex.com),
se verifica en Resend -> Domains y entonces ya se puede mandar a cualquier correo.

## 4. Configurar en Netlify (para que funcione publicado)

En tu sitio de Netlify entra a **Project configuration -> Environment variables**
y agrega estas dos (además de las de PDFMonkey que ya tienes):

| Nombre | Valor |
|--------|-------|
| `RESEND_API_KEY` | tu llave de Resend |
| `REACT_APP_CORREO_MULTIFLEX` | tu correo |

Después vuelve a publicar arrastrando la carpeta.

## 5. Cómo probar

1. Llena el formulario y envíalo.
2. Espera a que se genere el PDF.
3. Revisa tu correo: debe llegar uno con el asunto
   "Nueva solicitud MF-... - Plomería" y con el botón del comprobante.

Si el correo no llega pero el PDF sí se generó, aparece un aviso en el
formulario diciendo qué pasó. El comprobante NO se pierde por eso.

## 6. Archivos de esta integración

| Archivo | Para qué sirve |
|---------|----------------|
| `src/services/correo.js` | Arma el correo y lo pide |
| `src/setupProxy.js` | Intermediario cuando trabajas con npm start |
| `netlify/functions/correo.js` | Intermediario cuando está publicado |
| `netlify.toml` | Manda /api/correo a la función |
