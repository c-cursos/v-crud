

const 
    ceo = require( "./src/utils/ceo" ),
    doQuery = require( "./src/utils/queries" ),
    express = require( "express" ),
    app = express(),
    mysql = require( "mysql2" ),
    cors = require( "cors" ),
    path = require( "path" ),
    http = require( "http" ),
    cookieParser = require( "cookie-parser" );
    
    require( "dotenv" ).config();


app.set( "view engine", "ejs" );
// app.set( "views", path.join( __dirname, "./src/pages" ) );
app.set( "views", path.resolve( "src", "views" ) );

app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.use( express.static( path.join( __dirname, "src/public" ) ) );

app.use( cors() );

const db = mysql.createPool( {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
} );



/* ==[ routes ]======================================== */
const routes = {
    users: require( "./src/routes/users" ),
    index: require( "./src/routes/index" ),
};
app.use( "/", routes.index );
app.use( "/users", routes.users );

app.use( (req, res, next ) => {
    return res.status( 404 ).render( "page404" );
} );
/* ==[ server listener ]======================================== */
// const serverListener = 
//     app.listen( process.env.DB_PORT || serverGate, () => {
//         console.warn( 
//             `> server: http://${ process.env.DB_HOST }:${ serverListener.address().port }` );
// } );

// app.listen( process.env.DB_PORT || serverGate );
const port = process.env.DB_PORT || serverGate;

http.createServer( app ).listen( port, () => {
    console.warn( 
        `> server: http://${ process.env.DB_HOST }:${ port }` );
} );

module.exports = app;
