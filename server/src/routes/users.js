

const 
    express = require( "express" ),
    router = express(),
    { Userscontroller } = require( "../controllers/users" );


router.post( "/create-user", Userscontroller.createUser );
router.get( "/", Userscontroller.index );
router.put( "/update-user-name", Userscontroller.updateUserName );
router.put( "/update-user-email", Userscontroller.updateUserEmail );
router.put( "/update-user-age", Userscontroller.updateUserAge );
router.put( "/update-user-gender", Userscontroller.updateUserGender);
router.delete( "/delete/:id", Userscontroller.deleteUser );



module.exports = router;