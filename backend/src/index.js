const express = require("express");     //chama todo framework express para essa constante
const cors = require("cors");
const app = express();                  //constante onde se concentra toda nossa aplicação
const routes = require("./routes");     // importa a variavel routes do arquivo routes.js

app.use(cors());
app.use(express.json());                //define para o app que usaremos JSON no body do request
app.use(routes);                        // usa da variavel routes


app.listen(3333); // a aplicação rodará no endereço 'localhost:3333'

//a aplicação pode ser executada pelo terminal com o comando 'node index.js' se estiver dentro da pasta do arquivo


// a7412e58 ANIMAD