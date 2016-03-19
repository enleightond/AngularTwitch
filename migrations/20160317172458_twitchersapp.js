
exports.up = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.createTable('users', function(table){
		    table.increments('uid').primary();
		    table.string('twtich_id');
		    table.string('name');
		    table.string('email');
		    table.string('password');
		    table.timestamps();    
		}),
		knex.schema.createTable('favorites', function(table){
		    table.increments('id').primary();
		    table.string('gameid');
		    table.string('streamerid');	   	    
	  	})
	])
};

exports.down = function(knex, Promise) {
	
	return Promise.all([	
	  	knex.schema.dropTable('users'),
	  	knex.schema.dropTable('favorites')
	])
};
	