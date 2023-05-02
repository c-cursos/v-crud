

const 
    mysql = require( "mysql2" ),
    db = mysql.createPool( {
        host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
    } );

exports.IndexController = {
    index: ( req, res, next ) => {
        const
            viewsData = {
                pageTitle: "Server Index",
                firstName: "Anselmo",
                surname: "Sammarco Nunes",
                alias: "Céo",
                type: "vampire",
                bloodline: "hybrid",
            },
            table = "users";
        res.render( "index", viewsData );
    },
};
