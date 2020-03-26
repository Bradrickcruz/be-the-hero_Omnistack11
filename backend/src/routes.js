// todas as rotas do aplicativo nesse arquivo
const express = require("express"); // micro framework
const crypto = require("crypto");   // biblioteca de criptografia integrada ao node
const connection = require("./database/connection");    //conexão com o banco de dados
const ongController = require("./controllers/ongController");   //controlador de ongs
const incidentController = require("./controllers/incidentController"); //controlador de incidentes
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

const routes = express.Router();

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.post("/incidents", incidentController.create);
routes.get("/incidents", incidentController.index);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/profile_incidents",profileController.index);

routes.post("/sessions",sessionController.create);


/*
routes.get('/',(request,response)=>{
    
    return response.json({
        event: "Semana Omnistack 11.0",
        aluno: "Bryan Henrique Cruz Souza",
        mensagem: "Olá mundo! Bem-vindo à página inicial",
        link: "http://localhost:3333/users"
    })
})

routes.get('/users/:id',(request,response)=>{
    const params = request.params;
    console.log(params);

    return response.json({
        event: "Semana Omnistack 11.0",
        aluno: "Bryan Henrique Cruz Souza",
        mensagem: "Olá mundo!",
        usuario: params.id
    })
})
routes.post('/novouser',(request,response)=>{
    const params = request.params;
    const body = request.body;

    return response.json({
        event: "Semana Omnistack 11.0",
        aluno: "Bryan H. Cruz Souza",
        mensagem: "Olá mundo!",
        body: body
    })
});
*/

module.exports = routes;