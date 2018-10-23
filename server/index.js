const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./db'); //requiere la conexión de la db
//Server settings
/**
 * Crea variable 'port', que tendrá como valor el puerto que nos
 * provea la nube (process.env.PORT) o será el puerto 3000
 */
app.set('port', process.env.PORT || 3000) 

//Middlewares
/**
 * proporciona información sobre la conexión entre nav y server
 */
app.use(morgan('dev'));

/**
 * el server entenderá el formato JSON desde el nav
 */
app.use(express.json());

/**
 * Ejecucion del modulo que permite la comunicación de orígenes cruzados CORS
 */
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees',require('./routes/employee.routes'));
//Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});