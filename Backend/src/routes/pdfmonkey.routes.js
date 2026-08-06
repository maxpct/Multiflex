import express from 'express';

const router = express.Router();

const PDFMONKEY_KEY = process.env.PDFMONKEY_API_KEY;


router.post('/documents', async (req, res) => {

    try {

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

        res.status(respuesta.status).json(data);


    } catch(error) {

        console.error(error);

        res.status(500).json({
            success:false,
            message:'Error conectando con PDFMonkey'
        });

    }

});



router.get('/document_cards/:id', async (req,res)=>{

    try {

        const respuesta = await fetch(
            `https://api.pdfmonkey.io/api/v1/document_cards/${req.params.id}`,
            {
                headers:{
                    'Authorization': `Bearer ${PDFMONKEY_KEY}`
                }
            }
        );


        const data = await respuesta.json();

        res.status(respuesta.status).json(data);


    } catch(error){

        console.error(error);

        res.status(500).json({
            success:false,
            message:'Error consultando PDF'
        });

    }

});


export default router;