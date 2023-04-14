

/* ==[ CRUD Operations ]========================== */
    /* Create Database */
    app.get( "/createdb", ( req, res ) => {
        let insert2Db = "CREATE DATABASE IF NOT EXISTS testdb";
        db.query( insert2Db, ( err, result ) => {
            if( err ) throw err;
            console.log( result );
            res.send( "Database created..." );
        } );
    } );

/* Create Table */
    app.get( "/createtable", ( req, res ) => {
        let insert2Db = "CREATE TABLE IF NOT EXISTS OrderDetails( id int AUTO_INCREMENT, Name VARCHAR(255), Mobile INT(10), Email VARCHAR(255), Menu VARCHAR(255), Extra VARCHAR(255), PRIMARY KEY(id) )";
        db.query( insert2Db, ( err, result ) => {
            if( err ) throw err;
            console.log( result );
            res.send( "table created..." );
        } );
    } );

/* Read Data */
    app.get( "/getall", ( req, res ) => {
        let insert2Db = "SELECT * FROM OrderDetails";
        db.query( insert2Db, ( err, result ) => {
            if( err ) throw err;
            console.log( result );
            res.send( result );
        } );
    } );

/* Insert Data */
    app.post( "/insert", ( req, res ) => {
        console.log( req.body );
        let form = req.body;
        let insert2Db = `INSERT INTO OrderDetails( Name, Mobile, Email, Menu, Extra ) VALUES ( "${form.name}", "${form.mobile}", "${form.email}", "${form.dropdown}", "${form.order}" )`;
        db.query( insert2Db, ( err, result ) => {
            if( err ) throw err;
            console.log( result );
            res.send( "Post added..." );
        } );
    } );
/* ================================================= */
