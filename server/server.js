

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




const serverListener = 
    app.listen( process.env.DB_PORT || serverGate, () => {
        console.warn( 
            `> server: http://localhost:${ serverListener.address().port }` );
} );