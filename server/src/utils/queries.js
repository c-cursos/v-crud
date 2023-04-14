

const mysql = require( "mysql2" );


function doQuery( query, res ) {
    const connection = mysql.createConnection( {
        host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
    } );

    connection.query( query, ( err, result, fields ) => {
        err ?
            console.error( err ) :
            res.json( result );
        
        connection.end();
    } );
}

module.exports = doQuery;