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
app.use( cors() );
// app.use( express.static( path.join( __dirname, "build" ) ) );

const db = mysql.createPool( {
    host: process.env.DB_HOST,
    // port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
} );



app.get( "/reviews", ( req, res ) => {
    db.query( "SELECT * FROM book_reviews", ( err, result ) => {
        err ?
            console.error( err ) :
            res.send( result );
    } );
} );

app.post( "/reviews", ( req, res ) => {
    const insertQuery = "INSERT INTO book_reviews SET ?";
    db.query( insertQuery, req.body, ( err, result ) => {
        err ?
            console.error( err ) :
            res.send( "Review Added to Database" );
    } );
} );

app.put( "/reviews", ( req, res ) => {
    const updateQuery =
      "UPDATE book_reviews SET book_review = ?, book_rating = ? WHERE id = ?";
    db.query( updateQuery, [
        req.body.book_review,
        req.body.book_rating,
        req.body.id ], ( err, result ) => {
            err ?
                console.error( err ) :
                res.send( result );
        }
    );
} );

app.delete( "/reviews/:id", ( req, res ) => {
    db.query( "DELETE FROM book_reviews WHERE id = ?",
    req.params.id, ( err, result ) => {
        err ?
          console.error( err ) :
          res.send( result );
        }
    );
} );

app.get( "/clients", ( req, res ) => {
    doQuery( "select * from victoria_db.book_reviews", res );
} );

/* ==[ employees ]======================================== */
app.get( "/employees", ( c, e, o ) => {
    const
        table = "employees";
        db.query( `SELECT * FROM ${ table };`, ( err, result ) => {
            err ?
                console.error( err ) :
                e.send( result );
        } );
} );
app.post( "/create-employee", ( c, e, o ) => {
    const 
        { name, age, gender, email } = c.body,
        table = "employees";
    db.query( `insert into ${ table } ( name, age, gender, email ) values ( ?, ?, ?, ? )`,
    [ name, age, gender, email ],
    ( err, result ) => {
        err ?
            console.log( err ) :
            e.send( result );
    } );
} );

const serverListener = 
    app.listen( process.env.DB_PORT || serverGate, () => {
        console.warn( 
            `> server: http://localhost:${ serverListener.address().port }` );
} );