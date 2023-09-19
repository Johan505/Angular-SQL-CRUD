import express, { Application, Request, Response } from 'express';
import routesProducto from '../routes/producto';

class Server {
    private app: Application;
    private port: string;


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto')
        })
    }

    routes(){
        this.app.get('/', (req:Request, res:Response) => {
                res.json({
                    msg:'API Working'
                })
        })
        this.app.use('/api/productos', routesProducto)
    }

}

export default Server;