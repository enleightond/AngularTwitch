exports.up = function(knex, Promise) { 
	return knex.schema.createTable('favorite_streamers', function(table){
		    table.increments().primary();
		    table.integer('streamer_id');
		    table.integer('user_id').references('uid').inTable('users').onDelete('SET NULL');	   	    
	  	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('favorite_streamers');
};
