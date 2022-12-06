import express, { request, response } from "express";
import morgan from "morgan";
import api from "./routes/auth.routes"

//CORS
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());


// setting 
const puerto = process.env.PORT || 4000;

app.set("port", puerto);

// middleware
app.use(morgan("dev"));

//INDEX
app.use(express.static('view'));

//Routes
app.use("/auth", api) //cambio 


export default app;