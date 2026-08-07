import express from 'express';

const router = express.Router();

// OJO: la llave se lee DENTRO de cada ruta, no aquí arriba.
// Si se lee aquí, se ejecuta cuando se carga el archivo, que es
// antes de que dotenv cargue el .env, y quedaría vacía.


router.post('/documents', async (req, res) => {

    const PDFMONKEY_KEY = process.env.PDFMONKEY_API_KEY;

    // Si no hay llave, avisamos claro en vez de mandar una petición vacía.
    if (!PDFMONKEY_KEY) {
        return res.status(500).json({
            success: false,
            message: 'Falta la variable PDFMONKEY_API_KEY en el servidor'
        });
    }

    try {

        console.log('========== PDFMONKEY ==========');
        console.log('Llave encontrada:', !!PDFMONKEY_KEY);
        console.log('Body recibido:');
        console.log(JSON.stringify(req.body, null, 2));

        const respuesta = await fetch(
            'https://api.pdfmonkey.io/api/v1/documents',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${PDFMONKEY_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req.body)
            }
        );

        const data = await respuesta.json();

        console.log('Status PDFMonkey:', respuesta.status);
        console.log('Respuesta PDFMonkey:');
        console.log(data);

        // Si PDFMonkey rechazó la petición, lo dejamos en el log
        // para poder revisarlo después en Render.
        if (!respuesta.ok) {
            console.error('PDFMonkey respondió con error:', respuesta.status, data);
        }

        res.status(respuesta.status).json(data);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Error conectando con PDFMonkey'
        });

    }

});


router.get('/document_cards/:id', async (req, res) => {

    const PDFMONKEY_KEY = process.env.PDFMONKEY_API_KEY;

    if (!PDFMONKEY_KEY) {
        return res.status(500).json({
            success: false,
            message: 'Falta la variable PDFMONKEY_API_KEY en el servidor'
        });
    }

    try {

        const respuesta = await fetch(
            `https://api.pdfmonkey.io/api/v1/document_cards/${req.params.id}`,
            {
                headers: {
                    'Authorization': `Bearer ${PDFMONKEY_KEY}`
                }
            }
        );

        const data = await respuesta.json();

        res.status(respuesta.status).json(data);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Error consultando PDF'
        });

    }

});


// ===================================================================
// RUTA PARA VER EL PDF DENTRO DE LA PAGINA
//
// PDFMonkey nos da un enlace para ver el documento, pero ese enlace
// NO se puede meter en un iframe: su servidor lo bloquea por seguridad,
// y por eso el visor se queda en blanco aunque el PDF si exista.
//
// Lo que hace esta ruta es traer el PDF desde nuestro propio servidor
// y entregarlo tal cual. Asi el iframe lo pide a nuestra direccion,
// no a la de PDFMonkey, y si se puede mostrar.
// ===================================================================
router.get('/ver/:id', async (req, res) => {

    const PDFMONKEY_KEY = process.env.PDFMONKEY_API_KEY;

    if (!PDFMONKEY_KEY) {
        return res.status(500).json({
            success: false,
            message: 'Falta la variable PDFMONKEY_API_KEY en el servidor'
        });
    }

    try {

        // Primero le preguntamos a PDFMonkey donde esta el archivo.
        // Lo pedimos cada vez porque ese enlace caduca despues de un rato.
        const ficha = await fetch(
            `https://api.pdfmonkey.io/api/v1/document_cards/${req.params.id}`,
            {
                headers: {
                    'Authorization': `Bearer ${PDFMONKEY_KEY}`
                }
            }
        );

        if (!ficha.ok) {
            return res.status(ficha.status).json({
                success: false,
                message: 'No se encontro el documento en PDFMonkey'
            });
        }

        const info = await ficha.json();
        const doc = info.document_card || info.document || info;

        const enlace = doc.download_url || doc.preview_url;

        if (!enlace) {
            return res.status(404).json({
                success: false,
                message: 'El documento todavia no esta listo'
            });
        }

        // Ahora si descargamos el archivo.
        const archivo = await fetch(enlace);

        if (!archivo.ok) {
            return res.status(archivo.status).json({
                success: false,
                message: 'No se pudo descargar el PDF'
            });
        }

        const contenido = Buffer.from(await archivo.arrayBuffer());

        // "inline" le dice al navegador que lo muestre en vez de descargarlo.
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="comprobante.pdf"');
        res.send(contenido);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Error mostrando el PDF'
        });

    }

});


export default router;
