
exports.up = function(knex, Promise) {
  return knex.schema
  	.createTable('users', function(table){
	    table.increments();
	    table.string('twtich_id');
	    table.string('name');
	    table.string('email');
	    table.string('password');    
  	})
  	.createTable('favorites', function(table){
	    table.increments();
	    table.string('game');
	    table.string('streamer');	   	    
  	})
};

exports.down = function(knex, Promise) {
  	return knex.schema
  		.dropTable('users');
  		.dropTable('favorites');
};
	