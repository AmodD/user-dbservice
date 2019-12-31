var mysql = require('mysql');

class Db {
    constructor() {
	this.connection = mysql.createConnection({
	  host     : 'user-db-instance.clk5fe2qmcbs.ap-south-1.rds.amazonaws.com',
	  user     : 'fortiatedbadmin',
	  password : 'Fortiate_48',
	  port     : '3306',
	  database : 'user_db'
	});

	this.connection.connect(function(err) {
	  if (err) {
	    console.error('Database connection failed: ' + err.stack);
	    return;
	  }

	  console.log('Connected to database.');
	});

	//connection.end();
	
    }//constructor ends


    selectByEmail(email, callback) {
        return this.connection.query({
	      sql: 'SELECT * FROM `users` AS user WHERE `email` = ?',
	      timeout: 4000, // 4s
	      values: [email]
		}, function (error, results, fields) {
                callback(error, results[0])
     	});

    }//end of function

}// end of class

module.exports = Db
