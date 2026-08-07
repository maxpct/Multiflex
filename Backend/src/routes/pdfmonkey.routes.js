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


export default router;
