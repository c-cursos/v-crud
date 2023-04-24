const { error } = require("console");


const   ceo = require( "./src/utils/ceo" ),
        doQuery = require( "./src/utils/queries" ),
        express = require( "express" ),
        mysql = require( "mysql2" ),
        app = express(),
        cors = require( "cors" ),
        path = require( "path" );
        require( "dotenv" ).config();

const routes = {
    users: require( "./src/routes/users" ),
};

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( cors() );
// app.use( express.static( path.join( __dirname, "build" ) ) );

const db = mysql.createPool( {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
} );




app.get( "/", ( req, res, next ) => {
    res.send( "oi" );
} );
/* ==[ users routes ]======================================== */
// app.use( "/users", usersRoutes );
app.use( "/users", routes.users );

const serverListener = 
    app.listen( process.env.DB_PORT || serverGate, () => {
        console.warn( 
            `> server: http://${ process.env.DB_HOST }:${ serverListener.address().port }` );
} );

module.exports = app;

