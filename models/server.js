const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();

    }

    middlewares() {

        // CORS
        this.app.use(cors())

        // Parseo y lectura del body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.get('/api', (req, res) => {
        //     res.status(201).json({
        //         msg: 'get API'
        //     });
        // });

        this.app.use(this.usariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;