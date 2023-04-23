

const 
    mysql = require( "mysql2" ),
    db = mysql.createPool( {
        host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
    } );

exports.UsersController = {
    index: ( req, res, next ) => {
        const
            table = "users";
            db.query( `SELECT * FROM ${ table };`, ( err, result ) => {
                err ?
                    console.error( err ) :
                    res.send( result );
            } );
    },
    createUser: ( req, res, next ) => {
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
    },
    updateUserName: ( req, res, next ) => {
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
    },
    updateUserEmail: ( req, res, next ) => {
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
    },
    updateUserAge: ( req, res, next ) => {
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
    },
    updateUserGender: ( req, res, next ) => {
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
    },
    deleteUser: ( req, res, next ) => {
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
    },
};
