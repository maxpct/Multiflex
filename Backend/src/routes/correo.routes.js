import express from 'express';

const router = express.Router();

// OJO: la llave se lee DENTRO de la ruta, no aquí arriba,
// por la misma razón que en pdfmonkey.routes.js.


router.post('/', async (req, res) => {

    const RESEND_KEY = process.env.RESEND_API_KEY;

    // Si no hay llave, avisamos claro en vez de mandar una petición vacía.
    if (!RESEND_KEY) {
        return res.status(500).json({
            success: false,
            message: 'Falta la variable RESEND_API_KEY en el servidor'
        });
    }

    try {

        console.log('========== RESEND ==========');
        console.log('Llave encontrada:', !!RESEND_KEY);
        console.log('Body recibido:');
        console.log(JSON.stringify(req.body, null, 2));

        const respuesta = await fetch(
            'https://api.resend.com/emails',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${RESEND_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req.body)
            }
        );

        const data = await respuesta.json();

        console.log('Status Resend:', respuesta.status);
        console.log('Respuesta Resend:');
        console.log(data);

        // Si Resend rechazó el correo, lo dejamos en el log
        // para poder revisarlo después en Render.
        if (!respuesta.ok) {
            console.error('Resend respondió con error:', respuesta.status, data);
        }

        res.status(respuesta.status).json(data);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: 'Error enviando correo'
        });

    }

});


export default router;
