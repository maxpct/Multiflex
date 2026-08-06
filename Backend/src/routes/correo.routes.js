import express from 'express';

const router = express.Router();

const RESEND_KEY = process.env.RESEND_API_KEY;


router.post('/', async(req,res)=>{

    try{

        const respuesta = await fetch(
            'https://api.resend.com/emails',
            {
                method:'POST',
                headers:{
                    'Authorization':`Bearer ${RESEND_KEY}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(req.body)
            }
        );


        const data = await respuesta.json();


        res.status(respuesta.status).json(data);


    }catch(error){

        console.error(error);

        res.status(500).json({
            success:false,
            message:'Error enviando correo'
        });

    }

});


export default router;