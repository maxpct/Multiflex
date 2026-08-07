// IMPORTANTE: esta línea va PRIMERO que todos los demás imports.
// En los módulos de JavaScript, los imports se ejecutan en orden,
// así que si dotenv no va arriba, los archivos de rutas se cargan
// antes de que existan las variables del .env y quedan vacías.
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import servicesRoutes from './routes/services.routes.js';
import requestsRoutes from './routes/requests.routes.js';
import pool from './config/db.js';
import pdfmonkeyRoutes from './routes/pdfmonkey.routes.js';
import correoRoutes from './routes/correo.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the Multiflex API'
    });
});

// Esta ruta sirve para revisar si las llaves de las APIs
// se cargaron bien en el servidor. NO muestra las llaves,
// solo dice si están puestas o no.
app.get('/api/estado', (req, res) => {
    res.status(200).json({
        pdfmonkey: process.env.PDFMONKEY_API_KEY ? 'configurada' : 'FALTA',
        resend: process.env.RESEND_API_KEY ? 'configurada' : 'FALTA'
    });
});

app.use('/api/services', servicesRoutes);
app.use('/api/requests', requestsRoutes);
app.use('/api/pdfmonkey', pdfmonkeyRoutes);
app.use('/api/correo', correoRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

const startServer = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL successfully!');
    connection.release();

    // Avisamos en la consola si falta alguna llave,
    // para darnos cuenta rápido cuando algo no funciona.
    if (!process.env.PDFMONKEY_API_KEY) {
      console.warn('AVISO: falta la variable PDFMONKEY_API_KEY');
    }
    if (!process.env.RESEND_API_KEY) {
      console.warn('AVISO: falta la variable RESEND_API_KEY');
    }

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on http://0.0.0.0:${PORT}`);
    });

  } catch (error) {
    console.error('MySQL connection failed:');
    console.error(error);
    process.exit(1);
  }
};

startServer();
