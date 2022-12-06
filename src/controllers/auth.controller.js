import {getConnection} from "./../database/database"
import { encrypt, compare } from "./../helper/bcrypt";

const getUser= async(request, response)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        let js = {
            "nombre":result,
            "msm": "bien"
        }
        response.json(result)
        
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
    
}

const login = async(request, response)=>{
    try {
        const {
            user,
            clave,
            ipt
        } = request.body;

        if(
            user === undefined ||
            clave === undefined ||
            ipt === undefined
        ){
            response.json({ message: "Llena todos los campos." })
        }

        var usuario = await encrypt(user) 
        var password = await encrypt(clave) 
        var ip = await encrypt(ipt)

        const usuarios = {
            usuario,
            password,
            ip,
        };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", usuarios);
        response.json({ message: "Estamos accediendo a tu cuenta danos unos segundos"});
    } catch (error) {
        response.status(500);
        response.send(error.message+" gg")
    }
}


export const methods = {
    login
};