

const 
    express = require( "express" ),
    router = express(),
    { IndexController } = require( "../controllers/index" );


router.get( "/", IndexController.index );



module.exports = router;
