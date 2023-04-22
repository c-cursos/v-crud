const { error } = require("console");


const   ceo = require( "./src/utils/ceo" ),
        doQuery = require( "./src/utils/queries" ),
        express = require( "express" ),
        mysql = require( "mysql2" ),
        app = express(),
        cors = require( "cors" ),
        path = require( "path" );
        require( "dotenv" ).config();

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
app.get( "/users", ( req, res, next ) => {
    const
        table = "users";
        db.query( `SELECT * FROM ${ table };`, ( err, result ) => {
            err ?
                console.error( err ) :
                res.send( result );
        } );
} );
app.post( "/create-user", ( req, res, next ) => {
    const 
        { name, age, gender, email } = req.body,
        table = "users";
    db.query( `insert into ${ table } ( name, age, gender, email ) values ( ?, ?, ?, ? )`,
    [ name, age, gender, email ],
    ( err, result ) => {
        err ?
            console.log( err ) :
            res.send( result );
    } );
} );
app.put( "/update-user-name", ( req, res, next ) => {
    const 
        { id, name } = req.body,
        viewsData = {
            id: id,
            table: "users",
        };
    db.query( 
        `update ${ viewsData.table } set name = ? where id = ?`,
        [ name, id ],
        ( err, result ) => {
            err ?
                console.error( err ) : res.send( result );
        }
    );
} );
app.put( "/update-user-email", ( req, res, next ) => {
    const 
        { id, email } = req.body,
        viewsData = {
            id: id,
            table: "users",
        };
    db.query( 
        `update ${ viewsData.table } set email = ? where id = ?`,
        [ email, id ],
        ( err, result ) => {
            err ?
                console.error( err ) : res.send( result );
        }
    );
} );
app.put( "/update-user-age", ( req, res, next ) => {
    const 
        { id, age } = req.body,
        viewsData = {
            id: id,
            table: "users",
        };
    db.query( 
        `update ${ viewsData.table } set age = ? where id = ?`,
        [ age, id ],
        ( err, result ) => {
            err ?
                console.error( err ) : res.send( result );
        }
    );
} );
app.put( "/update-user-gender", ( req, res, next ) => {
    const 
        { id, gender } = req.body,
        viewsData = {
            id: id,
            table: "users",
        };
    db.query( 
        `update ${ viewsData.table } set gender = ? where id = ?`,
        [ gender, id ],
        ( err, result ) => {
            err ?
                console.error( err ) : res.send( result );
        }
    );
} );
app.delete( "/delete/:id", ( req, res, next ) => {
    const 
        id = req.params.id,
        viewsData = {
            table: "users",
        };
    db.query( `delete from ${ viewsData.table } where id = ?`,
    id, ( err, result ) => {
        err ?
            console.error( err ) : res.send( result );
    } );
} );

const serverListener = 
    app.listen( process.env.DB_PORT || serverGate, () => {
        console.warn( 
            `> server: http://localhost:${ serverListener.address().port }` );
} );

module.exports = app;
