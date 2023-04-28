

const 
    ceo = require( "./src/utils/ceo" ),
    doQuery = require( "./src/utils/queries" ),
    express = require( "express" ),
    app = express(),
    mysql = require( "mysql2" ),
    cors = require( "cors" ),
    path = require( "path" ),
    cookieParser = require( "cookie-parser" );
    
    require( "dotenv" ).config();

const routes = {
    users: require( "./src/routes/users" ),
    index: require( "./src/routes/index" ),
};

app.set( "views", path.join( __dirname, "src/views" ) );
app.set( "view engine", "ejs" );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.use( express.static( path.join( __dirname, "src/public" ) ) ); // define onde vao estar os arquivos estaticos
app.use( "/users", express.static( "src/public" ) );

app.use( cors() );
// app.use( express.static( path.join( __dirname, "build" ) ) );

const db = mysql.createPool( {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
} );




app.use( "/", routes.index );
/* ==[ users routes ]======================================== */
app.use( "/users", routes.users );



/* ==[ server listener ]======================================== */
const serverListener = 
    app.listen( process.env.DB_PORT || serverGate, () => {
        console.warn( 
            `> server: http://${ process.env.DB_HOST }:${ serverListener.address().port }` );
} );

module.exports = app;
