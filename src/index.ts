import 'reflect-metadata';
import app from "./app"
import mongoose from "mongoose";

mongoose.set('debug', true);

mongoose.connect('mongodb://127.0.0.1:27017/cart')
    .then(_ =>{
        console.log('Connessione avviata')
        app.listen(3000, ()=>{
            console.log('Server listening port 3000')
        });
    })

