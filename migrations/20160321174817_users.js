exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(table){
		    table.increments('uid').primary();
		    table.integer('twitch_id');
		    table.string('name').unique().notNullable();
		    table.string('email').notNullable();
		    table.string('password').notNullable();
		    table.timestamps();
		});
};

exports.down = function(knex, Promise) {	
	return knex.schema.dropTable('users');	  	
};
