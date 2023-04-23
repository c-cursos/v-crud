

const 
    express = require( "express" ),
    router = express(),
    { UsersController } = require( "../controllers/users" );


router.post( "/create-user", UsersController.createUser );
router.get( "/", UsersController.index );
router.put( "/update-user-name", UsersController.updateUserName );
router.put( "/update-user-email", UsersController.updateUserEmail );
router.put( "/update-user-age", UsersController.updateUserAge );
router.put( "/update-user-gender", UsersController.updateUserGender);
router.delete( "/delete/:id", UsersController.deleteUser );



module.exports = router;