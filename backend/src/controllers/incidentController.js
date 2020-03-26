const connection = require("../database/connection");

module.exports = {
    async create(request,response) {
        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert ({
            title,
            description,
            value,
            ong_id
        });

        return response.json({id});
    },
    async index(request, response){
        /*sistema simples de paginação pela rota*/
        const {page = 1} = request.query; //numero da pagina

        const [count] = await connection('incidents')
            .count(); //retorna a quantidade de registros totais

        response.header("X-Total-Count",count["count(*)"]);

        const incidents = await connection('incidents')
            .join("ongs","ongs.id",'=',"incidents.ong_id")
            .limit(5)               // limita o resultado em 5 registros
            .offset((page-1) * 5)   // começa do 1-1*5=0, depois vai para 2-1*5=5, pulando de 5 em 5
            .select([
                "incidents.*",
                "ongs.name",
                "ongs.email",
                "ongs.whats",
                "ongs.city",
                "ongs.uf"
                ]); 

        return response.json(incidents);
    },
    async delete(request,response){
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection("incidents")
            .where('id',id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id){
            return response.status(401).json({error:"Operation not permited."});
        }

        await connection('incidents')
            .where('id',id)
            .delete();

        return response.status(204).send();
    }
};