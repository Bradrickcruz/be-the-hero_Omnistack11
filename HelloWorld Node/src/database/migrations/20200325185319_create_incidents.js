
exports.up = function(knex) {
    return knex.schema.createTable("incidents",function (table){
        table.increments(); // chave primaria numerica que aumenta de um em um
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.decimal("value").notNullable();

        table.string("ong_id").notNullable; 
        table.foreign("ong_id").references("id").inTable('ongs');// relacionamento entre tabelas

  });
};

exports.down = function(knex) {
    return knex.schema.hasTable('incidents').then(function(exists) {
        if (exists) {
            return knex.schema.dropTable("incidents");
      };  
    });
};
