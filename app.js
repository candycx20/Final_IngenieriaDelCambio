import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import datoRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/datos', datoRoutes)


// Configura CORS antes de las rutas
/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas las orígenes (ajusta en producción)
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });*/

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

/* app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
}) */

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})