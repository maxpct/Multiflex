import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import servicesRoutes from './routes/services.routes.js';
import requestsRoutes from './routes/requests.routes.js';
import pool from './config/db.js';
import pdfmonkeyRoutes from './routes/pdfmonkey.routes.js';
import correoRoutes from './routes/correo.routes.js';

dotenv.config();

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
